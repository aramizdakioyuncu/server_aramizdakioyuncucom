import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomeController extends GetxController {
  var selectedIndex = 0.obs;
  // Create a GlobalKey for the Scaffold
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    scaffoldKey.currentState?.openDrawer();
  }

  void incrementCounter() {
    selectedIndex++;
    scaffoldKey.currentState?.openDrawer();
  }
}
