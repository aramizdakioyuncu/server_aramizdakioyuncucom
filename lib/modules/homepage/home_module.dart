import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/modules/homepage/bindings/home_binding.dart';
import 'package:server_aramizdakioyuncucom/modules/homepage/views/home_view.dart';

class HomeModule {
  static const route = '/';

  static final List<GetPage> routes = [
    GetPage(
      name: route,
      page: () => const HomePageView(),
      binding: HomeBinding(),
    ),
  ];
}
