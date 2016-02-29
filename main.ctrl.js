angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Cat Clicker';

        vm.cats = [
            {
                pic:'https://sp.yimg.com/xj/th?id=OIP.Mfbf6d69bb0b3507debc73b5cbe1d4bdaH0&pid=15.1&P=0&w=300&h=300',
                name:'Larry'
                
            }, 
            {
                pic:'https://sp.yimg.com/xj/th?id=OIP.Mdf3a61d3b316d8945472f0812cc7aaa7H0&pid=15.1&P=0&w=300&h=300',
                name:'Petunia'
                
            },
            {
                pic:'https://sp.yimg.com/xj/th?id=OIP.Md83b37a5fedccae118950cc8fef7c517H0&pid=15.1&P=0&w=300&h=300', 
                name:'Orville'}, 
                {
                    pic:'https://sp.yimg.com/xj/th?id=OIP.Mde51b8eebb812c65801594a69f8d209do0&pid=15.1&P=0&w=300&h=300', 
                    name:'Giggles'
                    
                },
                {
                    pic:'https://sp.yimg.com/xj/th?id=OIP.Mde6bf15cff08fc542a9956c86373ab69H0&pid=15.1&P=0&w=300&h=300', 
                    name:'Fluffystiltzkin'
                    
                }]; 

    

});