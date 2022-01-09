<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Template • Todo</title>
		<link rel="stylesheet" href="{{asset('css/base.css')}}">
		<link rel="stylesheet" href="{{asset('css/index.css')}}">
	</head>
	<body>
		<section class="todoapp">
			<header class="header">
				<h1>Super2Do</h1>
				<input class="new-todo" placeholder="What needs to be done?" autofocus>
			</header>
			<!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<!-- The list is generated in app.js -->
				</ul>
			</section>
			<!-- This footer should be hidden by default and shown when there are todos -->
			<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong class="count">0</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>

		<div class="postman-run-button"
			data-postman-action="collection/fork"
			data-postman-var-1="18965802-34e9dbb2-3c1f-48d2-951b-b92a8150454c"
			data-postman-collection-url="entityId=18965802-34e9dbb2-3c1f-48d2-951b-b92a8150454c&entityType=collection&workspaceId=52425be1-aa99-45e1-9305-df589369f333">
		</div>

		<!-- Scripts here. Don't remove ↓ -->
		<script type="text/javascript">
			(function (p,o,s,t,m,a,n) {
				!p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
				!o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
				(n = o.createElement("script")),
				(n.id = s+t), (n.async = 1), (n.src = m), n
				));
			}(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
		</script>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
		<script src="{{asset('js/app.js')}}"></script>
	</body>
</html>