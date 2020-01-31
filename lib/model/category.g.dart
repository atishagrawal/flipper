// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'category.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Category extends Category {
  @override
  final String name;
  @override
  final int id;
  @override
  final int businessId;
  @override
  final bool focused;
  @override
  final int branchId;

  factory _$Category([void Function(CategoryBuilder) updates]) =>
      (new CategoryBuilder()..update(updates)).build();

  _$Category._(
      {this.name, this.id, this.businessId, this.focused, this.branchId})
      : super._() {
    if (name == null) {
      throw new BuiltValueNullFieldError('Category', 'name');
    }
    if (id == null) {
      throw new BuiltValueNullFieldError('Category', 'id');
    }
    if (businessId == null) {
      throw new BuiltValueNullFieldError('Category', 'businessId');
    }
    if (focused == null) {
      throw new BuiltValueNullFieldError('Category', 'focused');
    }
    if (branchId == null) {
      throw new BuiltValueNullFieldError('Category', 'branchId');
    }
  }

  @override
  Category rebuild(void Function(CategoryBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CategoryBuilder toBuilder() => new CategoryBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Category &&
        name == other.name &&
        id == other.id &&
        businessId == other.businessId &&
        focused == other.focused &&
        branchId == other.branchId;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc($jc($jc($jc(0, name.hashCode), id.hashCode), businessId.hashCode),
            focused.hashCode),
        branchId.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('Category')
          ..add('name', name)
          ..add('id', id)
          ..add('businessId', businessId)
          ..add('focused', focused)
          ..add('branchId', branchId))
        .toString();
  }
}

class CategoryBuilder implements Builder<Category, CategoryBuilder> {
  _$Category _$v;

  String _name;
  String get name => _$this._name;
  set name(String name) => _$this._name = name;

  int _id;
  int get id => _$this._id;
  set id(int id) => _$this._id = id;

  int _businessId;
  int get businessId => _$this._businessId;
  set businessId(int businessId) => _$this._businessId = businessId;

  bool _focused;
  bool get focused => _$this._focused;
  set focused(bool focused) => _$this._focused = focused;

  int _branchId;
  int get branchId => _$this._branchId;
  set branchId(int branchId) => _$this._branchId = branchId;

  CategoryBuilder();

  CategoryBuilder get _$this {
    if (_$v != null) {
      _name = _$v.name;
      _id = _$v.id;
      _businessId = _$v.businessId;
      _focused = _$v.focused;
      _branchId = _$v.branchId;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Category other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$Category;
  }

  @override
  void update(void Function(CategoryBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$Category build() {
    final _$result = _$v ??
        new _$Category._(
            name: name,
            id: id,
            businessId: businessId,
            focused: focused,
            branchId: branchId);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new