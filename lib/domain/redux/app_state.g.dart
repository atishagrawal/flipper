// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'app_state.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AppState extends AppState {
  @override
  final User user;
  @override
  final Sheets sheet;
  @override
  final List<Branch> branches;
  @override
  final List<Business> business;
  @override
  final Hint hint;
  @override
  final Database database;

  factory _$AppState([void Function(AppStateBuilder) updates]) =>
      (new AppStateBuilder()..update(updates)).build();

  _$AppState._(
      {this.user,
      this.sheet,
      this.branches,
      this.business,
      this.hint,
      this.database})
      : super._() {
    if (branches == null) {
      throw new BuiltValueNullFieldError('AppState', 'branches');
    }
    if (database == null) {
      throw new BuiltValueNullFieldError('AppState', 'database');
    }
  }

  @override
  AppState rebuild(void Function(AppStateBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AppStateBuilder toBuilder() => new AppStateBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AppState &&
        user == other.user &&
        sheet == other.sheet &&
        branches == other.branches &&
        business == other.business &&
        hint == other.hint &&
        database == other.database;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc($jc($jc(0, user.hashCode), sheet.hashCode),
                    branches.hashCode),
                business.hashCode),
            hint.hashCode),
        database.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('AppState')
          ..add('user', user)
          ..add('sheet', sheet)
          ..add('branches', branches)
          ..add('business', business)
          ..add('hint', hint)
          ..add('database', database))
        .toString();
  }
}

class AppStateBuilder implements Builder<AppState, AppStateBuilder> {
  _$AppState _$v;

  UserBuilder _user;
  UserBuilder get user => _$this._user ??= new UserBuilder();
  set user(UserBuilder user) => _$this._user = user;

  SheetsBuilder _sheet;
  SheetsBuilder get sheet => _$this._sheet ??= new SheetsBuilder();
  set sheet(SheetsBuilder sheet) => _$this._sheet = sheet;

  List<Branch> _branches;
  List<Branch> get branches => _$this._branches;
  set branches(List<Branch> branches) => _$this._branches = branches;

  List<Business> _business;
  List<Business> get business => _$this._business;
  set business(List<Business> business) => _$this._business = business;

  HintBuilder _hint;
  HintBuilder get hint => _$this._hint ??= new HintBuilder();
  set hint(HintBuilder hint) => _$this._hint = hint;

  Database _database;
  Database get database => _$this._database;
  set database(Database database) => _$this._database = database;

  AppStateBuilder();

  AppStateBuilder get _$this {
    if (_$v != null) {
      _user = _$v.user?.toBuilder();
      _sheet = _$v.sheet?.toBuilder();
      _branches = _$v.branches;
      _business = _$v.business;
      _hint = _$v.hint?.toBuilder();
      _database = _$v.database;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AppState other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$AppState;
  }

  @override
  void update(void Function(AppStateBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$AppState build() {
    _$AppState _$result;
    try {
      _$result = _$v ??
          new _$AppState._(
              user: _user?.build(),
              sheet: _sheet?.build(),
              branches: branches,
              business: business,
              hint: _hint?.build(),
              database: database);
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'user';
        _user?.build();
        _$failedField = 'sheet';
        _sheet?.build();

        _$failedField = 'hint';
        _hint?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'AppState', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new