$(function(){

    var model = {
        init: function() {
           var cat_arr = [
  ["https://sp.yimg.com/xj/th?id=OIP.Mfbf6d69bb0b3507debc73b5cbe1d4bdaH0&pid=15.1&P=0&w=300&h=300", "Larry"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mdf3a61d3b316d8945472f0812cc7aaa7H0&pid=15.1&P=0&w=300&h=300", "Olive"],
  ["https://sp.yimg.com/xj/th?id=OIP.Md83b37a5fedccae118950cc8fef7c517H0&pid=15.1&P=0&w=300&h=300", "Orville"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mde51b8eebb812c65801594a69f8d209do0&pid=15.1&P=0&w=300&h=300", "Giggles"],
  ["https://sp.yimg.com/xj/th?id=OIP.Mde6bf15cff08fc542a9956c86373ab69H0&pid=15.1&P=0&w=300&h=300", "Sergeant Furryboots"]
]

            },
    picturefy: function(index) {
        var pic_url = cat_arr[index][0];
        var cat_name = cat_arr[index][1];
        
    },
    listify: function(index) {
        var cat_list_item = cat_arr[index][1];
    }

    };
        var puppetmaster = {
        addPic: function(noteStr) {
            model.add({
                content: noteStr,
                date: Date.now();
            });
            view.render();
        },

        makeList: function() {
            return model.getAllNotes().reverse();
        },

        init: function() {
            model.init();
            view.init();
        }
    };
    
    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                        '<br> <span class="note-date">' +
                        note.date +
                        '</span>' +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

