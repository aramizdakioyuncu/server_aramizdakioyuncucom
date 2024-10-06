import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:server_aramizdakioyuncucom/modules/homepage/controllers/home_controller.dart';
import 'package:server_aramizdakioyuncucom/widgets/appbar/appbar_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.put(HomeController());

    return Scaffold(
      appBar: const AppbarWidget(),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 100,
            decoration: BoxDecoration(
              border: Border(
                right: BorderSide(
                  color: Colors.grey.shade100,
                  width: 1,
                ),
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Spacer(),
                InkWell(
                  onTap: () {
                    controller.selectedIndex.value = 0;
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            CachedNetworkImage(
                              height: 70,
                              width: 70,
                              imageUrl:
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopuiOy9hCWJC8BFSdGMQaqTLlYbK0Na476Q&s",
                            ),
                            const Text(
                              'Minecraft',
                              style: TextStyle(color: Colors.black),
                            )
                          ],
                        ),
                      ),
                      const Spacer(),
                      Obx(
                        () => Container(
                          width: 2,
                          height: 100,
                          color: controller.selectedIndex.value == 0
                              ? Colors.blue
                              : Colors.grey.shade300,
                        ),
                      ),
                    ],
                  ),
                ),
                InkWell(
                  onTap: () {
                    controller.selectedIndex.value = 1;
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            CachedNetworkImage(
                              height: 70,
                              width: 70,
                              imageUrl:
                                  "https://fatalityservers.com/wp-content/uploads/fivem-v-icon.png",
                            ),
                            const Text(
                              'FiveM',
                              style: TextStyle(color: Colors.black),
                            )
                          ],
                        ),
                      ),
                      const Spacer(),
                      Obx(
                        () => Container(
                          width: 2,
                          height: 100,
                          color: controller.selectedIndex.value == 1
                              ? Colors.blue
                              : Colors.grey.shade300,
                        ),
                      ),
                    ],
                  ),
                ),
                InkWell(
                  onTap: () {
                    controller.selectedIndex.value = 2;
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            CachedNetworkImage(
                              height: 70,
                              width: 70,
                              imageUrl:
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_Dzbmd-5PnLFOs71byqF1wxdu3kTfDNgbA&s",
                            ),
                            const Text(
                              'ACorsa',
                              style: TextStyle(color: Colors.black),
                            )
                          ],
                        ),
                      ),
                      const Spacer(),
                      Obx(
                        () => Container(
                          width: 2,
                          height: 100,
                          color: controller.selectedIndex.value == 2
                              ? Colors.blue
                              : Colors.grey.shade300,
                        ),
                      ),
                    ],
                  ),
                ),
                const Spacer(),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: IconButton(
                    onPressed: () {},
                    icon: const Icon(
                      Icons.settings,
                    ),
                  ),
                )
              ],
            ),
          ),
          Expanded(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  children: <Widget>[
                    Container(
                      height: 400,
                      width: Get.width,
                      decoration: const BoxDecoration(
                          image: DecorationImage(
                            image: CachedNetworkImageProvider(
                              "https://img.lovepik.com/bg/20231221/Background-Wallpaper-for-Minecraft-Creeper_2664887_wh860.jpg!/fw/860",
                            ),
                            fit: BoxFit.cover,
                          ),
                          borderRadius: BorderRadius.all(Radius.circular(10))),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Column(
                          children: [
                            Align(
                              alignment: Alignment.bottomRight,
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Colors.black45,
                                  borderRadius: BorderRadius.circular(
                                    10,
                                  ),
                                ),
                                child: const Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Text(
                                    "Hayatta Kalma • 1.19.3 Paper",
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                              ),
                            ),
                            const Spacer(),
                            const Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                "ARAMIZDAKİ OYUNCU",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 32,
                                ),
                              ),
                            ),
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Colors.black45,
                                  borderRadius: BorderRadius.circular(
                                    10,
                                  ),
                                ),
                                child: const Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Text(
                                    "mc.aramizdakioyuncu.com",
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                              ),
                            ),
                            Align(
                              alignment: Alignment.bottomRight,
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Colors.black45,
                                  borderRadius: BorderRadius.circular(
                                    10,
                                  ),
                                ),
                                child: const Padding(
                                  padding: EdgeInsets.all(8.0),
                                  child: Text(
                                    "24 Çevrimiçi Oyuncu • 24 Toplam Oyuncu • 24 Toplam Yetkili",
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Row(
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text(
                                "Klanlar",
                                style: TextStyle(
                                  color: Colors.blue,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 26,
                                ),
                              ),
                            ),
                            Container(
                              width: Get.width / 3 - 80,
                              decoration: BoxDecoration(
                                border: Border.all(
                                  color: Colors.grey.shade200,
                                ),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              padding: const EdgeInsets.all(8),
                              child: Table(
                                border: TableBorder.all(color: Colors.white30),
                                defaultVerticalAlignment:
                                    TableCellVerticalAlignment.middle,
                                children: [
                                  const TableRow(
                                    children: [
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Klan"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Kurucu"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Toplam Öldürme"),
                                        ),
                                      ),
                                    ],
                                  ),
                                  ...List.generate(
                                    4,
                                    (index) => TableRow(
                                      children: [
                                        TableCell(
                                          child: Row(
                                            children: [
                                              Container(
                                                height: 10,
                                                width: 10,
                                                decoration: BoxDecoration(
                                                  color: Colors.yellow,
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                    100,
                                                  ),
                                                ),
                                              ),
                                              const SizedBox(width: 5),
                                              const Text("Rıhtım"),
                                            ],
                                          ),
                                        ),
                                        const TableCell(
                                          child: Text("testkullanici"),
                                        ),
                                        const TableCell(
                                          child: Text("-"),
                                        ),
                                      ],
                                    ),
                                  )
                                ],
                              ),
                            ),
                          ],
                        ),
                        const Spacer(),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text(
                                "Oyuncular",
                                style: TextStyle(
                                  color: Colors.blue,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 26,
                                ),
                              ),
                            ),
                            Container(
                              width: Get.width * 2 / 3 - 80,
                              decoration: BoxDecoration(
                                border: Border.all(
                                  color: Colors.grey.shade200,
                                ),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              padding: const EdgeInsets.all(8),
                              child: Table(
                                border: TableBorder.all(color: Colors.white30),
                                defaultVerticalAlignment:
                                    TableCellVerticalAlignment.middle,
                                children: [
                                  const TableRow(
                                    children: [
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("#"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Oyuncu"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Klan"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Para"),
                                        ),
                                      ),
                                      TableCell(
                                        verticalAlignment:
                                            TableCellVerticalAlignment.middle,
                                        child: Padding(
                                          padding: EdgeInsets.all(8.0),
                                          child: Text("Toplam Öldürme"),
                                        ),
                                      ),
                                    ],
                                  ),
                                  ...List.generate(
                                    4,
                                    (index) => TableRow(
                                      children: [
                                        TableCell(
                                          child: Row(
                                            children: [
                                              Container(
                                                height: 10,
                                                width: 10,
                                                decoration: BoxDecoration(
                                                  color: Colors.yellow,
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                    100,
                                                  ),
                                                ),
                                              ),
                                              const SizedBox(width: 5),
                                              const Text("Rıhtım"),
                                            ],
                                          ),
                                        ),
                                        const TableCell(
                                          child: Text("testkullanici"),
                                        ),
                                        const TableCell(
                                          child: Text("Rıtım"),
                                        ),
                                        const TableCell(
                                          child: Text("100 ₺"),
                                        ),
                                        const TableCell(
                                          child: Text("-"),
                                        ),
                                      ],
                                    ),
                                  )
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    const Text(
                      'You have pushed the button this many times:',
                    ),
                    Obx(
                      () => Text(
                        '${controller.selectedIndex}',
                        style: Theme.of(context).textTheme.headlineMedium,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: controller.incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
