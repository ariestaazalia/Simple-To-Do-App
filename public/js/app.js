(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	
	// Get All Data
	function showData(){
		$.getJSON('api/tasks', function(data){	
			$.each(data, function(i, data){
				if(data.status == 1){
					$('.todo-list').append(
						`<li class="completed">
							<div class="view">
								<input class="toggle" type="checkbox" data-id="`+ data.id +`" checked>
								<label>`+ data.task +`</label>
								<button class="destroy" data-id="`+ data.id +`"></button>
							</div>
							<input class="edit" value="Create a Todo template">
						</li>`
					);
				}else{
					$('.todo-list').append(
						`<li>
							<div class="view">
								<input class="toggle" type="checkbox" data-id="`+ data.id +`">
								<label>`+ data.task +`</label>
								<button class="destroy" data-id="`+ data.id +`"></button>
							</div>
							<input class="edit" value="Rule the web">
						</li>`
					)
				}

				if($('.toggle:checked').length > 0){
					$('.clear-completed').show();
				}else{
					$('.clear-completed').hide();
				}

				let count = $('.todo-list li').length;
				$('.count').html(count);
			})
		})
	}
	
	showData();

	// Get Data Based on Filter (Active/Completed)
	$('.filters').on('click', 'a', function(){
		$('a').removeClass('selected');
		$(this).addClass('selected');

		let category = $(this).html();

		if(category == 'All'){
			$('.todo-list').html('');
			showData();
			return;
		}

		$.getJSON('api/tasks', function(data){
			let content = '';

			$.each(data, function(i, data){
				if(data.status == 1 && category == 'Completed'){
					content +=
						`<li class="completed">
							<div class="view">
								<input class="toggle" type="checkbox" data-id="`+ data.id +`" checked>
								<label>`+ data.task +`</label>
								<button class="destroy" data-id="`+ data.id +`"></button>
							</div>
							<input class="edit" value="Create a Todo template">
						</li>`;
					let count = $('.toggle:checked').length;
					$('.count').html(count);
				}else if(data.status == 0 && category == 'Active'){
					content +=
						`<li>
							<div class="view">
								<input class="toggle" type="checkbox" data-id="`+ data.id +`">
								<label>`+ data.task +`</label>
								<button class="destroy" data-id="`+ data.id +`"></button>
							</div>
							<input class="edit" value="Rule the web">
						</li>`;	
					let count = $('.toggle:not(":checked")').length;
					$('.count').html(count);
				}
			});
			$('.todo-list').html(content);
		})
	});

	// Input Data on Enter Key Press
	$('.new-todo').keypress(function(e){
		if(e.which === 13){
			let task = $('.new-todo').val();
			$.ajax({
				url: 'api/tasks',
				type: 'POST',
				data:{
					task,
					'status' : 0
				}, 
				success: function(){
					$('.new-todo').val('');
					$('.todo-list').html('');
					showData();
				}
			})
			return false;
		}
	})

	// Updating Status per Data (Completed to Active and Otherwise)
	$('.todo-list').on('click', '.toggle', function(){
		if($(this).is(':checked')){
			$.ajax({
				url: 'api/tasks/' + $(this).data('id'),
				type: 'PUT',
				context: this,
				data: {
					'status' : 1,
					'id' : $(this).data('id')
				},
				success: function(){
					$(this).parents('li').addClass('completed');
					$('.clear-completed').show();
				}
			})
		}else{
			$.ajax({
				url: 'api/tasks/' + $(this).data('id'),
				type: 'PUT',
				context: this,
				data: {
					'status' : 0,
					'id' : $(this).data('id')
				},
				success: function(){
					$(this).parents('li').removeClass('completed');
				}
			})
		}
	})

	// Completing All Active Data
	$('.toggle-all').on('click', function(){
		$('.toggle').prop('checked', true)
		if($('.toggle').is(':checked')){
			let status = 0;
			$.ajax({
				url: 'api/tasks/' + status + '/complete',
				type: 'PUT',
				data: {'status' : 1},
				success: function(){
					$('.toggle').parents('li').addClass('completed');
				}
			})
		}
	})

	// Delete One Data
	$('.todo-list').on('click', '.destroy', function(){
		let id = $(this).data('id');
		let total = $('.todo-list li').length;
		let count = $(this).data('clicked', true).length;
		let final = total - count;
		$.ajax({
			url: 'api/tasks/' + id,
			type: 'DELETE',
			context: this,
			data: {id},
			success: function(){
				$(this).closest('li').fadeOut('slow', function(){ $(this).remove(); });
				$('.count').html(final);
				console.log(count);
			}
		})
	})

	// Delete All Completed Data
	$('.clear-completed').on('click', function(){
		let status = 1;
		let total = $('.todo-list li').length;
		let count = $('.toggle:checked').length;
		let completed = total - count;
		$.ajax({
			url: 'api/tasks/' + status + '/clear',
			type: 'DELETE',
			data: {status},
			success: function(){
				$('.clear-completed').hide();
				$('.toggle:checked').closest('li').fadeOut('slow', function(){ $('.toggle:checked').remove() });
				$('.count').html(completed);
			}
		})
	})
})(window);