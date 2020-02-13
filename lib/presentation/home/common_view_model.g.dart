// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'common_view_model.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CommonViewModel extends CommonViewModel {
  @override
  final bool hasUser;
  @override
  final bool hasSheet;
  @override
  final bool hasHint;
  @override
  final BuiltList<Unit> units;
  @override
  final int tab;
  @override
  final Business currentBusiness;
  @override
  final bool hasAction;
  @override
  final List<Branch> branches;
  @override
  final List<Business> businesses;
  @override
  final AppActions appAction;
  @override
  final Hint hint;
  @override
  final Category category;
  @override
  final Unit currentUnit;
  @override
  final FlipperColor currentColor;
  @override
  final Branch branch;
  @override
  final Item cartItem;
  @override
  final BuiltList<Item> itemVariations;
  @override
  final BuiltList<Item> items;
  @override
  final int currentIncrement;
  @override
  final Item currentActiveSaleItem;
  @override
  final Database database;
  @override
  final BuiltList<Cart> carts;
  @override
  final int cartQuantities;
  @override
  final Order order;
  @override
  final User user;
  @override
  final KeyPad keypad;
  @override
  final Unit customUnit;
  @override
  final Category customCategory;
  @override
  final Item customItem;
  @override
  final int tempCategoryId;
  @override
  final Item tmpItem;

  factory _$CommonViewModel([void Function(CommonViewModelBuilder) updates]) =>
      (new CommonViewModelBuilder()..update(updates)).build();

  _$CommonViewModel._(
      {this.hasUser,
      this.hasSheet,
      this.hasHint,
      this.units,
      this.tab,
      this.currentBusiness,
      this.hasAction,
      this.branches,
      this.businesses,
      this.appAction,
      this.hint,
      this.category,
      this.currentUnit,
      this.currentColor,
      this.branch,
      this.cartItem,
      this.itemVariations,
      this.items,
      this.currentIncrement,
      this.currentActiveSaleItem,
      this.database,
      this.carts,
      this.cartQuantities,
      this.order,
      this.user,
      this.keypad,
      this.customUnit,
      this.customCategory,
      this.customItem,
      this.tempCategoryId,
      this.tmpItem})
      : super._() {
    if (hasUser == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'hasUser');
    }
    if (hasSheet == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'hasSheet');
    }
    if (hasAction == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'hasAction');
    }
    if (branches == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'branches');
    }
    if (businesses == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'businesses');
    }
    if (hint == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'hint');
    }
    if (items == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'items');
    }
    if (database == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'database');
    }
    if (carts == null) {
      throw new BuiltValueNullFieldError('CommonViewModel', 'carts');
    }
  }

  @override
  CommonViewModel rebuild(void Function(CommonViewModelBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CommonViewModelBuilder toBuilder() =>
      new CommonViewModelBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is CommonViewModel &&
        hasUser == other.hasUser &&
        hasSheet == other.hasSheet &&
        hasHint == other.hasHint &&
        units == other.units &&
        tab == other.tab &&
        currentBusiness == other.currentBusiness &&
        hasAction == other.hasAction &&
        branches == other.branches &&
        businesses == other.businesses &&
        appAction == other.appAction &&
        hint == other.hint &&
        category == other.category &&
        currentUnit == other.currentUnit &&
        currentColor == other.currentColor &&
        branch == other.branch &&
        cartItem == other.cartItem &&
        itemVariations == other.itemVariations &&
        items == other.items &&
        currentIncrement == other.currentIncrement &&
        currentActiveSaleItem == other.currentActiveSaleItem &&
        database == other.database &&
        carts == other.carts &&
        cartQuantities == other.cartQuantities &&
        order == other.order &&
        user == other.user &&
        keypad == other.keypad &&
        customUnit == other.customUnit &&
        customCategory == other.customCategory &&
        customItem == other.customItem &&
        tempCategoryId == other.tempCategoryId &&
        tmpItem == other.tmpItem;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc(
                        $jc(
                            $jc(
                                $jc(
                                    $jc(
                                        $jc(
                                            $jc(
                                                $jc(
                                                    $jc(
                                                        $jc(
                                                            $jc(
                                                                $jc(
                                                                    $jc(
                                                                        $jc(
                                                                            $jc($jc($jc($jc($jc($jc($jc($jc($jc($jc($jc($jc($jc(0, hasUser.hashCode), hasSheet.hashCode), hasHint.hashCode), units.hashCode), tab.hashCode), currentBusiness.hashCode), hasAction.hashCode), branches.hashCode), businesses.hashCode), appAction.hashCode), hint.hashCode), category.hashCode),
                                                                                currentUnit.hashCode),
                                                                            currentColor.hashCode),
                                                                        branch.hashCode),
                                                                    cartItem.hashCode),
                                                                itemVariations.hashCode),
                                                            items.hashCode),
                                                        currentIncrement.hashCode),
                                                    currentActiveSaleItem.hashCode),
                                                database.hashCode),
                                            carts.hashCode),
                                        cartQuantities.hashCode),
                                    order.hashCode),
                                user.hashCode),
                            keypad.hashCode),
                        customUnit.hashCode),
                    customCategory.hashCode),
                customItem.hashCode),
            tempCategoryId.hashCode),
        tmpItem.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('CommonViewModel')
          ..add('hasUser', hasUser)
          ..add('hasSheet', hasSheet)
          ..add('hasHint', hasHint)
          ..add('units', units)
          ..add('tab', tab)
          ..add('currentBusiness', currentBusiness)
          ..add('hasAction', hasAction)
          ..add('branches', branches)
          ..add('businesses', businesses)
          ..add('appAction', appAction)
          ..add('hint', hint)
          ..add('category', category)
          ..add('currentUnit', currentUnit)
          ..add('currentColor', currentColor)
          ..add('branch', branch)
          ..add('cartItem', cartItem)
          ..add('itemVariations', itemVariations)
          ..add('items', items)
          ..add('currentIncrement', currentIncrement)
          ..add('currentActiveSaleItem', currentActiveSaleItem)
          ..add('database', database)
          ..add('carts', carts)
          ..add('cartQuantities', cartQuantities)
          ..add('order', order)
          ..add('user', user)
          ..add('keypad', keypad)
          ..add('customUnit', customUnit)
          ..add('customCategory', customCategory)
          ..add('customItem', customItem)
          ..add('tempCategoryId', tempCategoryId)
          ..add('tmpItem', tmpItem))
        .toString();
  }
}

class CommonViewModelBuilder
    implements Builder<CommonViewModel, CommonViewModelBuilder> {
  _$CommonViewModel _$v;

  bool _hasUser;
  bool get hasUser => _$this._hasUser;
  set hasUser(bool hasUser) => _$this._hasUser = hasUser;

  bool _hasSheet;
  bool get hasSheet => _$this._hasSheet;
  set hasSheet(bool hasSheet) => _$this._hasSheet = hasSheet;

  bool _hasHint;
  bool get hasHint => _$this._hasHint;
  set hasHint(bool hasHint) => _$this._hasHint = hasHint;

  ListBuilder<Unit> _units;
  ListBuilder<Unit> get units => _$this._units ??= new ListBuilder<Unit>();
  set units(ListBuilder<Unit> units) => _$this._units = units;

  int _tab;
  int get tab => _$this._tab;
  set tab(int tab) => _$this._tab = tab;

  BusinessBuilder _currentBusiness;
  BusinessBuilder get currentBusiness =>
      _$this._currentBusiness ??= new BusinessBuilder();
  set currentBusiness(BusinessBuilder currentBusiness) =>
      _$this._currentBusiness = currentBusiness;

  bool _hasAction;
  bool get hasAction => _$this._hasAction;
  set hasAction(bool hasAction) => _$this._hasAction = hasAction;

  List<Branch> _branches;
  List<Branch> get branches => _$this._branches;
  set branches(List<Branch> branches) => _$this._branches = branches;

  List<Business> _businesses;
  List<Business> get businesses => _$this._businesses;
  set businesses(List<Business> businesses) => _$this._businesses = businesses;

  AppActionsBuilder _appAction;
  AppActionsBuilder get appAction =>
      _$this._appAction ??= new AppActionsBuilder();
  set appAction(AppActionsBuilder appAction) => _$this._appAction = appAction;

  HintBuilder _hint;
  HintBuilder get hint => _$this._hint ??= new HintBuilder();
  set hint(HintBuilder hint) => _$this._hint = hint;

  CategoryBuilder _category;
  CategoryBuilder get category => _$this._category ??= new CategoryBuilder();
  set category(CategoryBuilder category) => _$this._category = category;

  UnitBuilder _currentUnit;
  UnitBuilder get currentUnit => _$this._currentUnit ??= new UnitBuilder();
  set currentUnit(UnitBuilder currentUnit) => _$this._currentUnit = currentUnit;

  FlipperColorBuilder _currentColor;
  FlipperColorBuilder get currentColor =>
      _$this._currentColor ??= new FlipperColorBuilder();
  set currentColor(FlipperColorBuilder currentColor) =>
      _$this._currentColor = currentColor;

  BranchBuilder _branch;
  BranchBuilder get branch => _$this._branch ??= new BranchBuilder();
  set branch(BranchBuilder branch) => _$this._branch = branch;

  ItemBuilder _cartItem;
  ItemBuilder get cartItem => _$this._cartItem ??= new ItemBuilder();
  set cartItem(ItemBuilder cartItem) => _$this._cartItem = cartItem;

  ListBuilder<Item> _itemVariations;
  ListBuilder<Item> get itemVariations =>
      _$this._itemVariations ??= new ListBuilder<Item>();
  set itemVariations(ListBuilder<Item> itemVariations) =>
      _$this._itemVariations = itemVariations;

  ListBuilder<Item> _items;
  ListBuilder<Item> get items => _$this._items ??= new ListBuilder<Item>();
  set items(ListBuilder<Item> items) => _$this._items = items;

  int _currentIncrement;
  int get currentIncrement => _$this._currentIncrement;
  set currentIncrement(int currentIncrement) =>
      _$this._currentIncrement = currentIncrement;

  ItemBuilder _currentActiveSaleItem;
  ItemBuilder get currentActiveSaleItem =>
      _$this._currentActiveSaleItem ??= new ItemBuilder();
  set currentActiveSaleItem(ItemBuilder currentActiveSaleItem) =>
      _$this._currentActiveSaleItem = currentActiveSaleItem;

  Database _database;
  Database get database => _$this._database;
  set database(Database database) => _$this._database = database;

  ListBuilder<Cart> _carts;
  ListBuilder<Cart> get carts => _$this._carts ??= new ListBuilder<Cart>();
  set carts(ListBuilder<Cart> carts) => _$this._carts = carts;

  int _cartQuantities;
  int get cartQuantities => _$this._cartQuantities;
  set cartQuantities(int cartQuantities) =>
      _$this._cartQuantities = cartQuantities;

  OrderBuilder _order;
  OrderBuilder get order => _$this._order ??= new OrderBuilder();
  set order(OrderBuilder order) => _$this._order = order;

  UserBuilder _user;
  UserBuilder get user => _$this._user ??= new UserBuilder();
  set user(UserBuilder user) => _$this._user = user;

  KeyPadBuilder _keypad;
  KeyPadBuilder get keypad => _$this._keypad ??= new KeyPadBuilder();
  set keypad(KeyPadBuilder keypad) => _$this._keypad = keypad;

  UnitBuilder _customUnit;
  UnitBuilder get customUnit => _$this._customUnit ??= new UnitBuilder();
  set customUnit(UnitBuilder customUnit) => _$this._customUnit = customUnit;

  CategoryBuilder _customCategory;
  CategoryBuilder get customCategory =>
      _$this._customCategory ??= new CategoryBuilder();
  set customCategory(CategoryBuilder customCategory) =>
      _$this._customCategory = customCategory;

  ItemBuilder _customItem;
  ItemBuilder get customItem => _$this._customItem ??= new ItemBuilder();
  set customItem(ItemBuilder customItem) => _$this._customItem = customItem;

  int _tempCategoryId;
  int get tempCategoryId => _$this._tempCategoryId;
  set tempCategoryId(int tempCategoryId) =>
      _$this._tempCategoryId = tempCategoryId;

  ItemBuilder _tmpItem;
  ItemBuilder get tmpItem => _$this._tmpItem ??= new ItemBuilder();
  set tmpItem(ItemBuilder tmpItem) => _$this._tmpItem = tmpItem;

  CommonViewModelBuilder();

  CommonViewModelBuilder get _$this {
    if (_$v != null) {
      _hasUser = _$v.hasUser;
      _hasSheet = _$v.hasSheet;
      _hasHint = _$v.hasHint;
      _units = _$v.units?.toBuilder();
      _tab = _$v.tab;
      _currentBusiness = _$v.currentBusiness?.toBuilder();
      _hasAction = _$v.hasAction;
      _branches = _$v.branches;
      _businesses = _$v.businesses;
      _appAction = _$v.appAction?.toBuilder();
      _hint = _$v.hint?.toBuilder();
      _category = _$v.category?.toBuilder();
      _currentUnit = _$v.currentUnit?.toBuilder();
      _currentColor = _$v.currentColor?.toBuilder();
      _branch = _$v.branch?.toBuilder();
      _cartItem = _$v.cartItem?.toBuilder();
      _itemVariations = _$v.itemVariations?.toBuilder();
      _items = _$v.items?.toBuilder();
      _currentIncrement = _$v.currentIncrement;
      _currentActiveSaleItem = _$v.currentActiveSaleItem?.toBuilder();
      _database = _$v.database;
      _carts = _$v.carts?.toBuilder();
      _cartQuantities = _$v.cartQuantities;
      _order = _$v.order?.toBuilder();
      _user = _$v.user?.toBuilder();
      _keypad = _$v.keypad?.toBuilder();
      _customUnit = _$v.customUnit?.toBuilder();
      _customCategory = _$v.customCategory?.toBuilder();
      _customItem = _$v.customItem?.toBuilder();
      _tempCategoryId = _$v.tempCategoryId;
      _tmpItem = _$v.tmpItem?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(CommonViewModel other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$CommonViewModel;
  }

  @override
  void update(void Function(CommonViewModelBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$CommonViewModel build() {
    _$CommonViewModel _$result;
    try {
      _$result = _$v ??
          new _$CommonViewModel._(
              hasUser: hasUser,
              hasSheet: hasSheet,
              hasHint: hasHint,
              units: _units?.build(),
              tab: tab,
              currentBusiness: _currentBusiness?.build(),
              hasAction: hasAction,
              branches: branches,
              businesses: businesses,
              appAction: _appAction?.build(),
              hint: hint.build(),
              category: _category?.build(),
              currentUnit: _currentUnit?.build(),
              currentColor: _currentColor?.build(),
              branch: _branch?.build(),
              cartItem: _cartItem?.build(),
              itemVariations: _itemVariations?.build(),
              items: items.build(),
              currentIncrement: currentIncrement,
              currentActiveSaleItem: _currentActiveSaleItem?.build(),
              database: database,
              carts: carts.build(),
              cartQuantities: cartQuantities,
              order: _order?.build(),
              user: _user?.build(),
              keypad: _keypad?.build(),
              customUnit: _customUnit?.build(),
              customCategory: _customCategory?.build(),
              customItem: _customItem?.build(),
              tempCategoryId: tempCategoryId,
              tmpItem: _tmpItem?.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'units';
        _units?.build();

        _$failedField = 'currentBusiness';
        _currentBusiness?.build();

        _$failedField = 'appAction';
        _appAction?.build();
        _$failedField = 'hint';
        hint.build();
        _$failedField = 'category';
        _category?.build();
        _$failedField = 'currentUnit';
        _currentUnit?.build();
        _$failedField = 'currentColor';
        _currentColor?.build();
        _$failedField = 'branch';
        _branch?.build();
        _$failedField = 'cartItem';
        _cartItem?.build();
        _$failedField = 'itemVariations';
        _itemVariations?.build();
        _$failedField = 'items';
        items.build();

        _$failedField = 'currentActiveSaleItem';
        _currentActiveSaleItem?.build();

        _$failedField = 'carts';
        carts.build();

        _$failedField = 'order';
        _order?.build();
        _$failedField = 'user';
        _user?.build();
        _$failedField = 'keypad';
        _keypad?.build();
        _$failedField = 'customUnit';
        _customUnit?.build();
        _$failedField = 'customCategory';
        _customCategory?.build();
        _$failedField = 'customItem';
        _customItem?.build();

        _$failedField = 'tmpItem';
        _tmpItem?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'CommonViewModel', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new