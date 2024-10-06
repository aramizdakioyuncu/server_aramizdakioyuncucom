import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/modules/homepage/views/home_view.dart';

class HomeBinding  extends Bindings{
  @override
  void dependencies() {
    Get.lazyPut<HomePageView>(() =>  const HomePageView());
  }

}