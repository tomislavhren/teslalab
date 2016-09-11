(function () {
    'use strict';

    angular
        .module('tesla-lab')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['$http', '$scope', '$interval', 'API', '$timeout'];

    function QuizController($http, $scope, $interval, API, $timeout) {
        var vm = this;
        vm.startSpinner = false;
        vm.questions = [];
        vm.correctAnswers = [];
        vm.incorrectAnswers = [];
        vm.currentQuestion = {};
        vm.in = false;
        vm.quizOver = false;
        vm.ranks = [];
        vm.resultsLoaded = false;
        vm.isCorrect = false;
        vm.isWrong = false;
        vm.counter = 30;
        vm.step = 0;
        vm.userScore = {
            Id: 0,
            Nickname: '',
            Score: 0,
            Timestamp: null
        };
        var countdown;
        var progressBar = document.querySelector('#pbar');
        var mProgress;

        componentHandler.upgradeElements(progressBar);

        progressBar.addEventListener('mdl-componentupgraded', function () {
            this.MaterialProgress.setProgress(0);
        });

        mProgress = progressBar.firstChild;

        vm.result = function () {
            var r = vm.correctAnswers.length != 0 ? vm.correctAnswers.length : 0;
            var total = vm.correctAnswers.length + vm.incorrectAnswers.length;
            return r + " / " + total;
        };

        vm.getQuestions = function () {
            $http.get("app/data/quizQuestions.json")
            .then(function (res) {
                res.data.sort(function () { return 0.5 - Math.random() })
                vm.questions = res.data.slice(0, 10);

                countdown = $interval(timer, 1000);

                vm.nextQuestion();
            })
        };

        vm.isAnswerCorrect = function (question, answer, $event) {
            var isTrue = question.options[answer].isTrue;
            var clickedButton = $event.currentTarget;

            if (isTrue) {
                vm.correctAnswers.push(question);
                clickedButton.classList += ' correct';
            } else {
                vm.incorrectAnswers.push(question);
                clickedButton.classList += ' wrong';
            }

            $timeout(function () {
                vm.nextQuestion();
            }, 600);
        };

        vm.nextQuestion = function () {
            vm.isCorrect = false;
            vm.isWrong = false;
            vm.in = true;
            vm.newQuestion = true;
            vm.currentQuestion = vm.questions.pop();
            if (!vm.currentQuestion) {
                $interval.cancel(countdown);
                vm.step = 1;
                componentHandler.upgradeElements(document.querySelector('.enter-nickname-container'));
                vm.quizOver = true;
            }
        }

        vm.getQuestions();

        vm.submitScore = function () {
            vm.userScore.Timestamp = new Date();
            vm.userScore.Score = vm.correctAnswers.length;

            vm.startSpinner = true;
            componentHandler.upgradeElements(document.querySelector('.mdl-spinner'));

            $http.post(API.baseUrl + '/Ranks', vm.userScore)
                .then(function (res) {
                    vm.ranks = res.data;
                    vm.step = 2;
                    vm.resultsLoaded = true;
                    vm.startSpinner = false;
                }, function (err) {
                    //TODO: error
                });
        };


        /* When quiz is over, cancel timer and get rank list */
        $scope.$watch('qc.quizOver', function (val) {
            if (val) {
                $interval.cancel(countdown);
            }
        });

        $scope.$on('$destroy', function () {
            $interval.cancel(countdown);
        });

        function timer() {
            vm.counter--;

            mProgress.style.width = (30 - vm.counter) * (10 / 3) + "%";

            if (vm.counter < 0) {
                $interval.cancel(countdown);
                vm.quizOver = true;
            }
        }

    }

})();
