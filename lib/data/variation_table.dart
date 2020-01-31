import 'package:moor/moor.dart';

class VariationTable extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text()();
  IntColumn get branchId =>
      integer().customConstraint('NULL REFERENCES branch_table(id)')();

  IntColumn get itemId =>
      integer().customConstraint('NULL REFERENCES item_table(id)')();

  IntColumn get count => integer()();
  IntColumn get price => integer()();
  DateTimeColumn get createdAt =>
      dateTime().withDefault(currentDateAndTime).nullable()();
  DateTimeColumn get updatedAt => dateTime().nullable()();
}