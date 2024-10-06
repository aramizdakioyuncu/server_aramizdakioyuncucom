import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/appInfo.dart';
import 'package:server_aramizdakioyuncucom/routes/app_routes.dart';
import 'package:server_aramizdakioyuncucom/theme/app_theme.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: AppInfo.appName,
      theme: appThemeData,
      initialRoute: AppPages.initial,
      getPages: AppPages.routes,
    );
  }
}