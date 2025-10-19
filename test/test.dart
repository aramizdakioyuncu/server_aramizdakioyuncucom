import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('ListTile Örneği'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading: const Icon(Icons.map),
              title: const Text('Lorem ipsum sit amend'),
              subtitle: const Text(
                  'dgnlks nhr gköhgkueröghuekg drlghöer gker uheskughesrkug erhkuw4u kusgeuj ghrkeuhj'),
              onTap: () {
                // Tıklama işlemi
              },
            ),
            ListTile(
              leading: const Icon(Icons.photo_album),
              title: const Text('Albüm'),
              subtitle: const Text('Fotoğraf albümü'),
              trailing: const Icon(Icons.navigate_next),
              onTap: () {
                // Tıklama işlemi
              },
            ),
            ListTile(
              leading: const Icon(Icons.phone),
              title: const Text('Telefon'),
              subtitle: const Text('Telefon uygulaması'),
              trailing: const Icon(Icons.navigate_next),
              onTap: () {
                // Tıklama işlemi
              },
            ),
          ],
        ),
      ),
    );
  }
}
