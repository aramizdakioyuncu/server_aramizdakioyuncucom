import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/utils/session.dart';

class AppBarWidgetController extends GetxController {
  var displayName = ''.obs;
  var avatarUrl = ''.obs;

  @override
  void onInit() {
    // Başlangıç verilerini yükleyin
    displayName.value = AppSession.user.displayname ?? '';
    avatarUrl.value = AppSession.user.avatar?.minUrl ?? '';
    super.onInit();
  }

  void refreshprofiledetail() {
    displayName.value = AppSession.user.displayname ?? '';
    avatarUrl.value = AppSession.user.avatar?.minUrl ?? '';
  }
}