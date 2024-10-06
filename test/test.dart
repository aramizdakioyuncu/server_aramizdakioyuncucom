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
          title: Text('ListTile Örneği'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.map),
              title: Text('Lorem ipsum sit amend'),
              subtitle: Text(
                  'dgnlks nhr gköhgkueröghuekg drlghöer gker uheskughesrkug erhkuw4u kusgeuj ghrkeuhj'),
              onTap: () {
                // Tıklama işlemi
              },
            ),
            ListTile(
              leading: Icon(Icons.photo_album),
              title: Text('Albüm'),
              subtitle: Text('Fotoğraf albümü'),
              trailing: Icon(Icons.navigate_next),
              onTap: () {
                // Tıklama işlemi
              },
            ),
            ListTile(
              leading: Icon(Icons.phone),
              title: Text('Telefon'),
              subtitle: Text('Telefon uygulaması'),
              trailing: Icon(Icons.navigate_next),
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
