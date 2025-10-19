import 'package:armoyu_services/armoyu_services.dart';
import 'package:armoyu_services/core/models/ARMOYU/_response/response.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/data/models/media.dart';
import 'package:server_aramizdakioyuncucom/utils/session.dart';
import 'package:server_aramizdakioyuncucom/widgets/appbar/appbar_controller.dart';

class AppbarWidget extends StatelessWidget implements PreferredSizeWidget {
  const AppbarWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final AppBarWidgetController appBarController =
        Get.put(AppBarWidgetController());

    return AppBar(
      leadingWidth: 100,
      toolbarHeight: 130,
      bottom: PreferredSize(
        preferredSize: preferredSize,
        child: Container(
          color: Colors.grey.shade100,
          height: 1,
        ),
      ),
      leading: Padding(
        padding: const EdgeInsets.all(3.0),
        child: CachedNetworkImage(
          imageUrl: "https://aramizdakioyuncu.com/galeri/ana-yapi/armoyu64.png",
        ),
      ),
      title: const Row(
        children: [
          Spacer(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Kurallar",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Spacer(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Etkinlikler",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Spacer(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Yetkililer",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Spacer(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "Mağaza",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Spacer(),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Text(
              "İletişim",
              style: TextStyle(
                fontSize: 14,
              ),
            ),
          ),
          Spacer(),
        ],
      ),
      centerTitle: true,
      actions: [
        const Row(
          children: [
            Icon(
              Icons.monetization_on,
              color: Colors.amber,
            ),
            Text("0.00"),
          ],
        ),
        const SizedBox(width: 10),
        const Row(
          children: [
            Icon(
              Icons.monetization_on,
              color: Colors.red,
            ),
            Text("0.00"),
            SizedBox(width: 10),
            SelectableText(
              "Test Kullanıcı",
            )
          ],
        ),
        Obx(
          () => Text(appBarController.displayName.value),
        ),
        const SizedBox(width: 10),
        InkWell(
          onTap: () async {
            ARMOYUServices service = ARMOYUServices(
                apiKey: "bda0b6f27fc1a6a87e8ba8cd9ab339ca",
                usePreviousAPI: true);
            showDialog(
              context: context,
              builder: (BuildContext context) {
                return Dialog(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20.0),
                  ),
                  child: Container(
                    padding: const EdgeInsets.all(20.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text(
                          'Özel Modal',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 10),
                        const SizedBox(height: 20),
                        TextField(
                          controller: TextEditingController(),
                          decoration: const InputDecoration(
                            labelText: 'Kullanıcı Adı',
                            border: OutlineInputBorder(),
                          ),
                        ),
                        const SizedBox(height: 10),
                        TextField(
                          controller: TextEditingController(),
                          decoration: const InputDecoration(
                            labelText: 'Şifre',
                            border: OutlineInputBorder(),
                          ),
                          obscureText: true,
                        ),
                        const SizedBox(height: 20),
                        ElevatedButton(
                          onPressed: () async {
                            LoginResponse result = await service.authServices
                                .login(username: "deneme", password: "deneme");

                            if (!result.result.status) {
                              return;
                            }

                            AppSession.user.value.displayname =
                                result.response!.displayName;
                            AppSession.user.value.avatar = Media(
                              id: result.response!.avatar!.mediaID,
                              type: MediaType.image,
                              bigUrl: result.response!.avatar!.mediaURL.bigURL,
                              normalUrl:
                                  result.response!.avatar!.mediaURL.normalURL,
                              minUrl: result.response!.avatar!.mediaURL.minURL,
                              isLocal: false,
                            );
                            log(AppSession.user.value.avatar!.minUrl);
                            Get.back();
                          },
                          child: const Text('Kapat'),
                        ),
                      ],
                    ),
                  ),
                );
              },
            );
          },
          child: Obx(
            () => Padding(
              padding: const EdgeInsets.all(8.0),
              child: AppSession.user.value.avatar == null
                  ? const Text("data")
                  : CircleAvatar(
                      foregroundImage: CachedNetworkImageProvider(
                        AppSession.user.value.avatar!.minUrl,
                      ),
                    ),
            ),
          ),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
