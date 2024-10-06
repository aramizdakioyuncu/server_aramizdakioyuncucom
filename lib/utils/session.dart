import 'package:server_aramizdakioyuncucom/data/models/user.dart';

class AppSession {
  static User user = User(id: 0);
  static DateTime? logindate;
  static String? userTOKEN;
}