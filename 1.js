$('#myInfiniteScroll1').infinitescroll({
    //dataSource is required to append additional content
    dataSource: function(helpers, callback){
      setTimeout(function(){ // Add artificial delay
        //passing back more content
        callback({ content: 'More blahhhhh.........' });
      }, 2000);
    }
});


$('#myInfiniteScroll2').infinitescroll({
    dataSource: function (helpers, callback) {
      setTimeout(function () {
        callback({
            content: 'More blahhhh..........'
        });
      }, 2000);
    },
    hybrid: true
});
