import 'dart:html';

main() {
  final sundays = const [
    'Mencuci Pakaian',
    'Membersihkan Kamar',
    'Buat Project Mobile',
  ];
  document.querySelector('#todo-list')
    ..append(new UListElement()
      ..children.addAll(
        sundays.map(_createListItem),
      ));
}

Element _createListItem(String item) {
  final li = new LIElement();
  final button = new ButtonElement()
    ..text = 'Selesai'
    ..onClick.listen((_) => li.remove());
  li
    ..appendText(item)
    ..append(button);
  return li;
}