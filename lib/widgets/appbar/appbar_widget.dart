import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/widgets/appbar/appbar_controller.dart';

class AppbarWidget extends StatelessWidget implements PreferredSizeWidget {
  const AppbarWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final AppBarWidgetController appBarController =
        Get.put(AppBarWidgetController());

    return AppBar(
      leading: CachedNetworkImage(
        imageUrl: "https://aramizdakioyuncu.com/galeri/ana-yapi/armoyu64.png",
        height: 60,
        width: 60,
      ),
      title: const Row(
        children: [
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Kurallar",
              style: TextStyle(fontSize: 14),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Etkinlikler",
              style: TextStyle(fontSize: 14),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Yetkililer",
              style: TextStyle(fontSize: 14),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Mağaza",
              style: TextStyle(fontSize: 14),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "İletişim",
              style: TextStyle(fontSize: 14),
            ),
          ),
        ],
      ),
      centerTitle: false,
      actions: [
        const Row(
          children: [
            Icon(
              Icons.monetization_on,
            ),
            Text("0.00"),
          ],
        ),
        const SizedBox(width: 10),
        const Row(
          children: [
            Icon(
              Icons.monetization_on,
            ),
            Text("0.00"),
            SelectableText(
              "Test Kullanıcı",
            )
          ],
        ),
        Obx(() => Text(appBarController.displayName.value)),
        const SizedBox(width: 10),
        const Padding(
            padding: EdgeInsets.all(8.0),
            child: CircleAvatar(
              foregroundImage: CachedNetworkImageProvider(
                "https://aramizdakioyuncu.com/galeri/ana-yapi/armoyu64.png",
              ),
            )),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
