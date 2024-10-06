enum MediaType { image, video }

class Media {
  final int id; // Medyanın benzersiz kimliği
  final MediaType type; // Medya türü (görsel veya video)
  final String bigUrl; // Büyük boyutlu görsel URL'si
  final String normalUrl; // Normal boyutlu görsel URL'si
  final String minUrl; // Küçük boyutlu görsel URL'si
  final bool isLocal; // Yerel dosya mı?

  Media({
    required this.id,
    required this.type,
    required this.bigUrl,
    required this.normalUrl,
    required this.minUrl,
    required this.isLocal,
  });

  // JSON'dan MediaModel'e dönüştürme
  factory Media.fromJson(Map<String, dynamic> json) {
    return Media(
      id: json['id'],
      type: MediaType.values
          .firstWhere((e) => e.toString() == 'MediaType.${json['type']}'),
      bigUrl: json['bigUrl'],
      normalUrl: json['normalUrl'],
      minUrl: json['minUrl'],
      isLocal: json['isLocal'] ?? false, // Varsayılan olarak false
    );
  }

  // MediaModel'den JSON'a dönüştürme
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'type': type.toString().split('.').last, // Enum'u stringe dönüştürme
      'bigUrl': bigUrl,
      'normalUrl': normalUrl,
      'minUrl': minUrl,
      'isLocal': isLocal,
    };
  }
}