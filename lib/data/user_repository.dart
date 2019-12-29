import 'package:flipper/data/main_database.dart';
import 'package:flipper/domain/redux/app_state.dart';
import 'package:flipper/model/user.dart';
import 'package:redux/redux.dart';

class UserRepository {
  insertUser(Store<AppState> store, User user) {
    var u = new UserData(
        email: user.email,
        status: user.status,
        avatar: user.avatar,
        bearerToken: user.bearerToken,
        refreshToken: user.refreshToken);
    store.state.database.userDao.insertUser(u);
  }

  Future<void> logOut() async {
    await updateUserToken(null);
  }

  Future<void> updateUserToken(String token) async {}

  Stream<List<UserData>> checkAuth(Store<AppState> store) {
    return store.state.database.userDao.watchUser();
  }
}
