import 'package:flipper/data/main_database.dart';
import 'package:flipper/data/respositories/general_repository.dart';
import 'package:flipper/domain/redux/app_actions/actions.dart';
import 'package:flipper/domain/redux/app_state.dart';
import 'package:flipper/model/category.dart';
import 'package:flipper/model/item.dart';
import 'package:flipper/model/unit.dart';
import 'package:flipper/routes/router.gr.dart';
import 'package:flutter/material.dart';
import 'package:redux/redux.dart';

List<Middleware<AppState>> AppActionMiddleware(
  GlobalKey<NavigatorState> navigatorKey,
  GeneralRepository generalRepository,
) {
  return [
    TypedMiddleware<AppState, OnSetTab>(
        _setTab(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, CreateUnit>(
        _createCategory(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, CreateCategoryFromAddItemScreenAction>(
        _createCategoryRegular(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, PersistFocusedUnitAction>(
        _persistUnit(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, InvokePersistFocusedCategory>(
        _persistCategoryFocused(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, CreateEmptyTempCategoryAction>(
        _createTempCategory(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, SaveItemAction>(
        _createItemInStore(navigatorKey, generalRepository)),
    TypedMiddleware<AppState, SwitchCategory>(
        _switchCategory(navigatorKey, generalRepository)),
  ];
}

void Function(Store<AppState> store,
        CreateCategoryFromAddItemScreenAction action, NextDispatcher next)
    _createCategoryRegular(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) async {
    if (store.state.tempCategoryId != null &&
        store.state.categoryName != null &&
        store.state.currentActiveBusiness != null) {
      await generalRepository.updateCategory(store, store.state.tempCategoryId,
          store.state.categoryName, store.state.currentActiveBusiness);

      List<CategoryTableData> categoryList =
          await generalRepository.getCategories(store);

      List<Category> categories = [];

      categoryList.forEach((c) => {
            categories.add(Category(
              (u) => u
                ..name = c.name
                ..focused = c.focused
                ..businessId = u.businessId ?? 0
                ..branchId = u.branchId ?? 0
                ..id = c.id,
            ))
          });

      store.dispatch(CategoryAction(categories));
    } else {
      //show a toast that creating category failed.
    }
  };
}

void Function(Store<AppState> store, CreateEmptyTempCategoryAction action,
        NextDispatcher next)
    _createTempCategory(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) async {
    if (store.state.currentActiveBusiness != null) {
      final categoryId = await generalRepository.insertCategory(
          store, store.state.currentActiveBusiness.id);
      store.dispatch(TempCategoryIdAction(categoryId: categoryId));
    }
  };
}

void Function(Store<AppState> store, InvokePersistFocusedCategory action,
        NextDispatcher next)
    _persistCategoryFocused(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) async {
    store.state.categories.forEach((u) => {
          if (u.id == action.category.id)
            {
              generalRepository.updateCategory(
                store,
                u.id,
                null,
                store.state.currentActiveBusiness,
                focused: action.category.focused == null ? true : !u.focused,
              )
            }
          else
            {
              generalRepository.updateCategory(
                store,
                u.id,
                null,
                store.state.currentActiveBusiness,
                focused: false,
              )
            }
        });
  };
}

void Function(Store<AppState> store, PersistFocusedUnitAction action,
        NextDispatcher next)
    _persistUnit(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) {
    if (store.state.focusedUnit != null) {
      store.state.units.forEach((u) => {
            if (u.id == store.state.focusedUnit)
              {
                generalRepository.updateUnit(
                    store,
                    Unit((j) => j
                      ..id = u.id
                      ..businessId = u.businessId
                      ..branchId = u.branchId
                      ..focused = true
                      ..name = u.name))
              }
            else
              {
                generalRepository.updateUnit(
                    store,
                    Unit((j) => j
                      ..id = u.id
                      ..businessId = u.businessId
                      ..branchId = u.branchId
                      ..focused = false
                      ..name = u.name))
              }
          });
    }
  };
}

void Function(Store<AppState> store, CreateUnit action, NextDispatcher next)
    _createCategory(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) {
    print(store.state.currentActiveBusiness);
    print(store.state.category);
  };
}

void Function(Store<AppState> store, dynamic action, NextDispatcher next)
    _setTab(
  GlobalKey<NavigatorState> navigatorKey,
  GeneralRepository generalRepository,
) {
  return (store, action, next) async {
    next(action);
    if (store.state.tab != null) {
      final updated = await generalRepository.updateTab(store, store.state.tab);
      if (!updated) {
        await generalRepository.insertTabs(store, store.state.tab);
      }
    }
  };
}

void Function(Store<AppState> store, SaveItemAction action, NextDispatcher next)
    _createItemInStore(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) async {
    next(action);
    //todo: in v2 clean code duplication.
    if (action.variations.length == 0) {
      //atleast make sure we do have one variant per item
      final item = await generalRepository.insertItem(
        store,
        // ignore: missing_required_param
        ItemTableData(
            name: action.name,
            categoryId: action.category.id,
            description: action.description,
            unitId: action.unit.id,
            color: action.color,
            branchId: action.branch.id),
      );

      final variantId = await generalRepository.insertVariant(
        store,
        // ignore: missing_required_param
        VariationTableData(
          name: "Regular",
          price: 0,
          count: 0,
          itemId: item,
          branchId: action.branch.id,
        ),
      );
      await generalRepository.insertHistory(store, variantId, 0);
      //todo: change save the variant with respective price price is saved per variant.
      //todo: should save item description too

      if (item is int) {
        List<ItemTableData> items = await generalRepository.getItems(store);
        List<Item> itemList = [];

        items.forEach(
          (i) => itemList.add(
            Item(
              (v) => v
                ..name = i.name
                ..branchId = i.branchId
                ..unitId = i.unitId
                ..id = i.id
                ..color = i.color
                ..categoryId = i.categoryId,
            ),
          ),
        );
        store.dispatch(ItemLoaded(items: itemList));
        Router.navigator.popUntil(ModalRoute.withName(Router.dashboard));
      }
    }

    //insert item
    final item = await generalRepository.insertItem(
      store,
      // ignore: missing_required_param
      ItemTableData(
        name: action.name,
        description: action.description,
        categoryId: action.category.id,
        unitId: action.unit.id,
        color: action.color,
        branchId: action.branch.id,
      ),
    );
    for (var i = 0; i < action.variations.length; i++) {
      // insert variation and get last id to save the item then

      final variationId = await generalRepository.insertVariant(
        store,
        // ignore: missing_required_param
        VariationTableData(
            name: action.variations[i].name,
            price: int.parse(action.price),
            count: action.variations[i].stockValue,
            branchId: action.branch.id,
            itemId: item),
      );
      await generalRepository.insertHistory(
          store, variationId, action.variations[i].stockValue);

      if (item is int) {
        List<ItemTableData> items = await generalRepository.getItems(store);
        List<Item> itemList = [];
        items.forEach(
          (i) => itemList.add(
            Item(
              (v) => v
                ..name = i.name
                ..branchId = i.branchId
                ..unitId = i.unitId
                ..id = i.id
                ..color = i.color
                ..categoryId = i.categoryId,
            ),
          ),
        );
        store.dispatch(ItemLoaded(items: itemList));
        // Logger.d("Sussessfully created an item");
        Router.navigator.popUntil(ModalRoute.withName(Router.dashboard));
      }
    }
  };
}

void Function(Store<AppState> store, SwitchCategory action, NextDispatcher next)
    _switchCategory(GlobalKey<NavigatorState> navigatorKey,
        GeneralRepository generalRepository) {
  return (store, action, next) async {
    next(action);

    List<Category> categories = [];
    for (var i = 0; i < store.state.categories.length; i++) {
      if (store.state.categories[i].id == action.category.id) {
        categories.add(
          Category(
            (c) => c
              ..focused = action.category.focused == null
                  ? true
                  : !action.category.focused
              ..id = store.state.categories[i].id
              ..name = store.state.categories[i].name
              ..businessId = store.state.categories[i].businessId
              ..branchId = store.state.categories[i].branchId,
          ),
        );
      } else {
        categories.add(
          Category((c) => c
            ..focused = false
            ..id = store.state.categories[i].id
            ..name = store.state.categories[i].name
            ..businessId = store.state.categories[i].businessId
            ..branchId = store.state.categories[i].branchId),
        );
      }
    }
    store.dispatch(CategoryAction(categories));
  };
}