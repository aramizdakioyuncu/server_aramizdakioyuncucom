import 'package:flutter/material.dart';
import 'package:server_aramizdakioyuncucom/data/models/media.dart';

class User {
  int? id;
  String? firstname;
  String? lastname;
  String? displayname;
  String? email;
  String? phonenumber;
  String? serialNumber;
  Media? avatar;
  Gender? gender;

  User({
    this.id,
    this.firstname,
    this.lastname,
    this.displayname,
    this.email,
    this.phonenumber,
    this.serialNumber,
    this.avatar,
    this.gender,
  });

  void changeusername(
      {required String getfirstname, required String getlastname}) {
    firstname = getfirstname;
    lastname = getlastname;
    displayname = "$getfirstname $getlastname";
  }

  // JSON'dan User nesnesine dönüştürmek için bir fabrika yöntemi
  factory User.fromURLJson(Map<String, dynamic> json) {
    return User(
      id: json['id'],
      firstname: json['name']['first'],
      lastname: json['name']['last'],
      displayname: json['name']['first'] + " " + json['name']['last'],
      email: json['email'],
      // phonenumber: json['phonenumber'],
      serialNumber: json['phone'],
      avatar: Media(
        id: 1,
        type: MediaType.image,
        bigUrl: json['picture']['large'],
        normalUrl: json['picture']['medium'],
        minUrl: json['picture']['thumbnail'],
        isLocal: false,
      ),
    );
  }

  // User nesnesini JSON'a dönüştürmek için bir yöntem
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'firstname': firstname,
      'lastname': lastname,
      'displayname': displayname,
      'email': email,
      'phonenumber': phonenumber,
      'serialNumber': serialNumber,
      'avatar': avatar?.toJson(),
      'address': avatar?.toJson(),
    };
  }
}

extension StatusExtension2 on Gender {
  String get val {
    switch (this) {
      case Gender.male:
        return "Erkek";
      case Gender.female:
        return "Kadın";
    }
  }

  IconData get icon {
    switch (this) {
      case Gender.male:
        return Icons.male;
      case Gender.female:
        return Icons.female;
    }
  }

  Color get color {
    switch (this) {
      case Gender.male:
        return Colors.green;
      case Gender.female:
        return Colors.red;
    }
  }
}

enum Gender { male, female }