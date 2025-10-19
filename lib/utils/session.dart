import 'package:get/get_rx/src/rx_types/rx_types.dart';
import 'package:server_aramizdakioyuncucom/data/models/user.dart';

class AppSession {
  static Rx<User> user = User().obs;
  static DateTime? logindate;
  static String? userTOKEN;
}
