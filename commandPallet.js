function drawPallet(){
var config = {
  initialList: 'Quick_View',
  onChange:onChange,
  lists: {
    Quick_View: [
      { value: 'Account IDs', children: 'Account_By_ID' },
      { value: 'Transaction IDs', children: 'Transactions_By_ID' },
      { value: 'Transactions by Name', children: 'Transactions_By_Name' }
    ],
    Account_By_ID : 
        [   '4051694345404902',
            '8253594415636011',
            '1945340430755308',
            '4051694345404912'],
    Transactions_By_ID :
        [
            '8573315966758950',
            '8573315966758949',
            '8573315966758940',
            '8421552562162948',
            '8573315966758947',
            '8573315966758940',
            '8573315966758940'
        ],
        Transactions_By_Name :
        [
            "Texaco petrol station",
            "Raspberry Pi 5 starter kit",
            "Cheque 00012345",
            "Fender Acoustic Guitar",
            "Internal Tranfer Acc ****8122",
            "Account charges"
        ]
  }
};
var widget = new AutoComplete('search_bar', config);
}
var onChange = function(newValue, oldValue) {
console.log(newValue);
if(newValue.length == 1){
    if(newValue[0].length>1){
  var val = newValue[0][1].value;
    if(val=="8573315966758950")
        window.location.href("trans1.html");
    else
        window.location.href("trans2.html");
    }
}
};