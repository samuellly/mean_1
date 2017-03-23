app.controller('wallController', function($scope, wallFactory) {
    $scope.newMessage = {};
    $scope.newComment = {};
    $scope.messages = [];
    $scope.user = '';
    function currentUser() {
        wallFactory.getUser(function(user) {
            $scope.user = user.username;
        });
    }
    function getMessages() {
        wallFactory.allMessages(function(messages) {
                $scope.messages = messages;
        });
    }
    getMessages();
    currentUser();

    $scope.addMessage = function() {
        $scope.newMessage.user = $scope.user;
        wallFactory.createMessage($scope.newMessage, function() {
            getMessages();
            $scope.newMessage = {};
        });
    };

    $scope.addComment = function(mId) {
        $scope.newComment.comment = $scope.newComment[mId];
        $scope.newComment.id = mId;
        $scope.newComment.user = $scope.user;
        wallFactory.createComment($scope.newComment, function() {
            getMessages();
            $scope.newComment = {};
        });
    };
});
