(function($) {

    $('#header__icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function (e) {
        $('body').removeClass('with--sidebar');
    })

    // $('#sos').click(function(e){
    // 	 e.preventDefault();
    //      $( '#ra' ).toggleClass( "visible" );

    // });

    $('#sos').click(function (e) {
        e.preventDefault();
        $('#ra').toggleClass("visible");


        if ($('#ra').hasClass('visible')) {
            $('.peloton').addClass("blur");
            $('.miniartistes').addClass("blur");

        } else {

            $('.peloton').removeClass("blur");
            $('.miniartistes').removeClass("blur");

        }


        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.animate({
            left: -slideoutMenuWidth
        }, 250);

    });


    $('#sva').click(function (e) {
        e.preventDefault();
        $("#search_sub").toggleClass("visible");
    });

    // $('#ar').click(function(e){
    //         $( "#aaa" ).hide();
    //      $( "#bbb" ).show();
    // });

    $(':checkbox').change(function () {

        if ((!$('#art ').is(':checked') && !$('#oeu ').is(':checked') && !$('#eve ').is(':checked')) || ($('#art ').is(':checked') && $('#oeu ').is(':checked') && $('#eve ').is(':checked'))) {
            $('#aaa ').show();
            $('#bbb ').hide();
            $('#ccc ').hide();
            $('#eee ').hide();
            $('#fff ').hide();
        }
        else {
            if ($('#eve ').is(':checked') && !$('#art ').is(':checked') && !$('#oeu ').is(':checked')) {
                $('#aaa ').hide();
                $('#bbb ').hide();
                $('#ccc ').show();
                $('#eee ').hide();
                $('#fff ').hide();
            } else {
                if (($('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                    $('#aaa ').hide();
                    $('#bbb ').show();
                    $('#ccc ').hide();
                    $('#eee ').hide();
                    $('#fff ').hide();
                }
                else {
                    if (($('#art ').is(':checked') && !$('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                        $('#aaa ').hide();
                        $('#bbb ').hide();
                        $('#ccc ').hide();
                        $('#eee ').show();
                        $('#fff ').hide();
                    }
                    else {
                        if ((!$('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                            $('#aaa ').hide();
                            $('#bbb ').hide();
                            $('#ccc ').hide();
                            $('#eee ').hide();
                            $('#fff ').show();
                        }
                    }
                }


            }
        }
    });


    $(':checkbox').change(function () {

        if ((!$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked') && !$('#minieve ').is(':checked')) || ($('#miniart ').is(':checked') && $('#minioeu ').is(':checked') && $('#minieve ').is(':checked'))) {
            $('#kkk ').show();
            $('#hhh ').hide();
            $('#ddd ').hide();
        } else {
            if ($('#minieve ').is(':checked') && !$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked')) {
                $('#kkk ').hide();
                $('#hhh ').hide();
                $('#ddd ').show();
            } else {
                if (($('#miniart ').is(':checked') || $('#minioeu ').is(':checked')) && !$('#minieve ').is(':checked')) {
                    $('#kkk ').hide();
                    $('#hhh ').show();
                    $('#ddd ').hide();
                } else {
                    $('#kkk ').show();
                    $('#hhh ').hide();
                    $('#ddd ').hide();
                }
            }
        }


    });


})(jQuery);

(function ( $ ) {
	
	$.fn.niceselect = function()
	{
		
		return this.each(function(index,value)
		{
			/*SET VARIABLES
			============================*/
			var name = $(this).attr('name')
			var select = $(this);
			var num = index;
			var multi = false;
			var multix = '';
			var type= 'radio';
			var required = '';
			var classes = '';
			var selected = '';
			var placeholder = 'Select';
			
			if(select.attr('multiple') !== undefined)
			{
				multi = true;
				multix = '[]';
				type= 'checkbox';
			}		
			
			if($(this).attr('class') !== undefined)
			{
				var classes = $(this).attr('class');
			}
			
			if(select.find('[value="placeholder"]').length > 0)
			{
				placeholder = select.find('[value="placeholder"]').html();
			}
			
			if(typeof( select.attr('required') ) != 'undefined')
			{
				required = 'required';
			}
			
			/*WRAP SELECT IN DIV
			-------------------------*/
			select.wrap('<div class="select_style '+classes+'"/>');
			$('<span class="selectcon">&nbsp;</span>').insertBefore(select);
			
			
			/*CREATE PLACEHOLDER + OPTION BOX
			--------------------------------------------*/
			$('<div class="niceselect '+name+'" data-multi="'+multi+'"><p class="top">'+placeholder+'</p><div class="value_wrapper"></div></div>').insertBefore(this)			
			
			
			/*CREATE OPTGROUP BOXES
			--------------------------------------------*/
			
			if(select.find('optgroup').length > 0)
			{
				select.find('optgroup').each(function(key, opt){
					select.siblings('.niceselect').children('.value_wrapper').append('<div class="opt opt'+key+'"><span class="optTitle">'+$(opt).attr('label')+'</span></div>')
					
						$(opt).find('option').each(function(index,value){
							
							
							var val;
							if($(this).val() == '')
							{ 
								
								 val = $(this).html();
							}
							else
							{
								 val = $(this).val();
							}
							
							var txt = $(this).html();
							
							
							selected = '';
							if(typeof( $(this).attr('selected') ) != 'undefined')
							{
								selected = 'checked';
								select.siblings('.niceselect').find('p.top').html(txt)
							}
							
							
							select.siblings('.niceselect').find('.opt'+key).append('<div class="values"><input type="'+type+'"  '+required+' '+selected+' style=" pointer-events: none;" name="'+name+multix+'" value="'+val+'" data-text="'+txt+'" id="'+index+name+index+'" /> <label class="nice_label" >'+txt+'</label></div>')

						})
					})
				
				
			}
			/*CREATE GENERAL OPTION FIELDS*/
			else
			{
				select.find('option').each(function(index,value){
							
						var $this = $(this);
						var val;
						if($(this).val() == '')
						{ 
							
							 val = $(this).html();
						}
						else
						{
							 val = $(this).val();
						}
						
						var txt = $(this).html();
						selected = '';
						if(typeof( $(this).attr('selected') ) != 'undefined')
						{
							selected = 'checked';
							select.siblings('.niceselect').find('p.top').html(txt)
						}
						
						
						select.siblings('.niceselect').children('.value_wrapper').append('<div class="values"><input type="'+type+'" '+required+' '+selected+' style=" pointer-events: none;" name="'+name+multix+'" value="'+val+'" data-text="'+txt+'" id="'+index+name+index+'" /> <label class="nice_label" >'+txt+'</label></div>')
						
					})

			}
			
			select.remove()
			select.attr('name','blobla')
			
			
			
			/*BIND CLICK FUNCTIONS (hide / show menu)
			===========================================*/
			$('body').on('click',function()
			{
				$('.niceselect .value_wrapper').hide();
				
				$('.select_style').removeClass('active')
			})
			
			$('body').on('click','.niceselect',function(e)
			{
				e.stopImmediatePropagation();
				if($(this).parent().hasClass('active'))
				{
					$(this).find('.value_wrapper').hide();
					$(this).parent().removeClass('active');
					console.log('here')
				}
				else
				{
					//$('.niceselect .value_wrapper').hide();
					$(this).children('.value_wrapper').show()
					$(this).parent().addClass('active')
				}
			})
			
			
			/*BIND CLICK FUNCTIONS (check values / update visual)
			=====================================================*/			
			
			$('body').on('click','.niceselect .value_wrapper .values',function(e){
				e.stopImmediatePropagation();
				var checkBoxes = $(this).find('input');
				 
				var par = $(this).parent().parent();
				if(par.attr('data-multi') == 'true')
				{
					
					 
					 if($(this).hasClass('active'))
					 {
					 	$(this).removeClass('active');
					 }
					 else
					 {
					 	$(this).addClass('active');
					 }
					
					 
				}
				else
				{
					 $(this).parent().parent().find('input[checked]').removeAttr('checked')
					 $(this).parent().parent().find('.active').removeClass('active');
					 
					 if($(this).hasClass('active'))
					 {
					 	$(this).removeClass('active');
					 }
					 else
					 {
					 	$(this).addClass('active');
					 }
					 
					 $('.niceselect .value_wrapper').hide();
					 $('.select_style').removeClass('active')
					 
				}
				 
				 
				 checkBoxes.prop("checked", !checkBoxes.prop("checked"));
				 
				 checkBoxes.trigger('change')
			})
			$('body').on('click','.niceselect .value_wrapper .values label',function(e){e.preventDefault()})
			$('body').on('change','.niceselect .values input',function(e){
				
				var par = $(this).closest('.niceselect')
				if(par.attr('data-multi') == 'true')
				{
					var number = par.find('input:checked').length;

					par.find('p.top').html(number + ' Selected')				
				}
				else
				{
					par.find('p.top').html($(this).attr('data-text'))
				}
			})

			
			
			
			/*SEARCH OPTIONS IN SELECT BOX
			----------------------------------------*/
		
		
		var string = '';
		$('body').on('keypress',function(e){
			
			if($('.value_wrapper').is(':visible'))
			{
				var clearString;
				$('.value_wrapper .highlight').removeClass('highlight')
				
				clearInterval(clearString)
				string = string+String.fromCharCode(e.which);
				
				if(string.length == 1)
				{
					string = string.toUpperCase();
				}			
				
				var thing = $('.value_wrapper:visible').find('label:contains('+string+')').first();
				
				
				$(thing).parent().addClass('highlight')
				if($('.value_wrapper:visible').find('.highlight').length > 0)
				{
					$('.value_wrapper:visible').stop().scrollTop($('.value_wrapper:visible').scrollTop() + $('.highlight').position().top)
				}
				clearString = setTimeout(function(){string = ''},500);
			}
			
			
			
		})

			
			
			
		})			
	}
	
}( jQuery ));

/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'dd/mm/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this)//,
								//mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				//blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
	
		this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}
		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
		this.onRender = options.onRender;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
			}
			var that = this;
			$(document).on('mousedown', function(ev){
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			//this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		set: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		setValue: function(newDate) {
			if (typeof newDate === 'string') {
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(newDate){
			this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
			);
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName,
				prevY,
				prevM;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
				}
				clsName = this.onRender(prevMonth);
				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				if ((prevM < month &&  prevY === year) ||  prevY < year) {
					clsName += ' old';
				} else if ((prevM > month && prevY === year) || prevY > year) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day '+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length === 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);
								this.fill();
								this.set();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
							this.fill();
							this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
		onRender: function(date) {
			return '';
		}
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
			daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
			daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
			months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/\-\s].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(),
				val;
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			if (parts.length === format.parts.length) {
				var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							day = val;
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							month = val - 1;
							date.setMonth(val - 1);
							break;
						case 'yy':
							year = 2000 + val;
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							year = val;
							date.setFullYear(val);
							break;
					}
				}
				date = new Date(year, month, day, 0 ,0 ,0);
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&lsaquo;</th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next">&rsaquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery );


/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
;(function ($) {
  'use strict';

  $.fn.waterwheelCarousel = function (startingOptions) {

    // Adds support for intializing multiple carousels from the same selector group
    if (this.length > 1) {
      this.each(function() {
        $(this).waterwheelCarousel(startingOptions);
      });
      return this; // allow chaining
    }

    var carousel = this;
    var options = {};
    var data = {};

    function initializeCarouselData() {
      data = {
        itemsContainer:         $(carousel),
        totalItems:             $(carousel).find('img').length,
        containerWidth:         $(carousel).width(),
        containerHeight:        $(carousel).height(),
        currentCenterItem:      null,
        previousCenterItem:     null,
        items:                  [],
        calculations:           [],
        carouselRotationsLeft:  0,
        currentlyMoving:        false,
        itemsAnimating:         0,
        currentSpeed:           options.speed,
        intervalTimer:          null,
        currentDirection:       'forward',
        leftItemsCount:         0,
        rightItemsCount:        0,
        performingSetup:        true
      };
      data.itemsContainer.find('img').removeClass(options.activeClassName);
    }

    /**
     * This function will set the autoplay for the carousel to
     * automatically rotate it given the time in the options
     * Can clear the autoplay by passing in true
     */
    function autoPlay(stop) {
      // clear timer
      clearTimeout(data.autoPlayTimer);
      // as long as no stop command, and autoplay isn't zeroed...
      if (!stop && options.autoPlay !== 0) {
        // set timer...
        data.autoPlayTimer = setTimeout(function () {
          // to move the carousl in either direction...
          if (options.autoPlay > 0) {
            moveOnce('forward');
          } else {
            moveOnce('backward');
          }
        }, Math.abs(options.autoPlay));
      }
    }

    /**
     * This function will preload all the images in the carousel before
     * calling the passed in callback function. This is only used so we can
     * properly determine the width and height of the items. This is not needed
     * if a user instead manually specifies that information.
     */
    function preload(callback) {
      if (options.preloadImages === false) {
        callback();
        return;
      }

      var $imageElements = data.itemsContainer.find('img'), loadedImages = 0, totalImages = $imageElements.length;

      $imageElements.each(function () {
        $(this).bind('load', function () {
          // Add to number of images loaded and see if they are all done yet
          loadedImages += 1;
          if (loadedImages === totalImages) {
            // All done, perform callback
            callback();
            return;
          }
        });
        // May need to manually reset the src to get the load event to fire
        // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
        $(this).attr('src', $(this).attr('src'));

        // If browser has cached the images, it may not call trigger a load. Detect this and do it ourselves
        if (this.complete) {
          $(this).trigger('load');
        }
      });
    }

    /**
     * Makes a record of the original width and height of all the items in the carousel.
     * If we re-intialize the carousel, these values can be used to re-establish their
     * original dimensions.
     */
    function setOriginalItemDimensions() {
      data.itemsContainer.find('img').each(function () {
        if ($(this).data('original_width') == undefined || options.forcedImageWidth > 0) {
          $(this).data('original_width', $(this).width());
        }
        if ($(this).data('original_height') == undefined || options.forcedImageHeight > 0) {
          $(this).data('original_height', $(this).height());
        }
      });
    }

    /**
     * Users can pass in a specific width and height that should be applied to every image.
     * While this option can be used in conjunction with the image preloader, the intended
     * use case is for when the preloader is turned off and the images don't have defined
     * dimensions in CSS. The carousel needs dimensions one way or another to work properly.
     */
    function forceImageDimensionsIfEnabled() {
      if (options.forcedImageWidth && options.forcedImageHeight) {
        data.itemsContainer.find('img').each(function () {
          $(this).width(options.forcedImageWidth);
          $(this).height(options.forcedImageHeight);
        });
      }
    }

    /**
     * For each "visible" item slot (# of flanking items plus the middle),
     * we pre-calculate all of the properties that the item should possess while
     * occupying that slot. This saves us some time during the actual animation.
     */
    function preCalculatePositionProperties() {
      // The 0 index is the center item in the carousel
      var $firstItem = data.itemsContainer.find('img:first');

      data.calculations[0] = {
        distance: 0,
        offset:   0,
        opacity:  1
      }

      // Then, for each number of flanking items (plus one more, see below), we
      // perform the calcations based on our user options
      var horizonOffset = options.horizonOffset;
      var separation = options.separation;
      for (var i = 1; i <= options.flankingItems + 2; i++) {
        if (i > 1) {
          horizonOffset *= options.horizonOffsetMultiplier;
          separation *= options.separationMultiplier;
        }
        data.calculations[i] = {
          distance: data.calculations[i-1].distance + separation,
          offset:   data.calculations[i-1].offset + horizonOffset,
          opacity:  data.calculations[i-1].opacity * options.opacityMultiplier
        }
      }
      // We performed 1 extra set of calculations above so that the items that
      // are moving out of sight (based on # of flanking items) gracefully animate there
      // However, we need them to animate to hidden, so we set the opacity to 0 for
      // that last item
      if (options.edgeFadeEnabled) {
        data.calculations[options.flankingItems+1].opacity = 0;
      } else {
        data.calculations[options.flankingItems+1] = {
          distance: 0,
          offset: 0,
          opacity: 0
        }
      }
    }

    /**
     * Here we prep the carousel and its items, like setting default CSS
     * attributes. All items start in the middle position by default
     * and will "fan out" from there during the first animation
     */
    function setupCarousel() {
      // Fill in a data array with jQuery objects of all the images
      data.items = data.itemsContainer.find('img');
      for (var i = 0; i < data.totalItems; i++) {
        data.items[i] = $(data.items[i]);
      }

      // May need to set the horizon if it was set to auto
      if (options.horizon === 0) {
        if (options.orientation === 'horizontal') {
          options.horizon = data.containerHeight / 2;
        } else {
          options.horizon = data.containerWidth / 2;
        }
      }

      // Default all the items to the center position
      data.itemsContainer
        .css('position','relative')
        .find('img')
          .each(function () {
            // Figure out where the top and left positions for center should be
            var centerPosLeft, centerPosTop;
            if (options.orientation === 'horizontal') {
              centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
              centerPosTop = options.horizon - ($(this).data('original_height') / 2);
            } else {
              centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
              centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
            }
            $(this)
              // Apply positioning and layering to the images
              .css({
                'left': centerPosLeft,
                'top': centerPosTop,
                'visibility': 'visible',
                'position': 'absolute',
                'z-index': 0,
                'opacity': 0
              })
              // Give each image a data object so it remembers specific data about
              // it's original form
              .data({
                top:             centerPosTop,
                left:            centerPosLeft,
                oldPosition:     0,
                currentPosition: 0,
                depth:           0,
                opacity:         0
              })
              // The image has been setup... Now we can show it
              .show();
          });
    }

    /**
     * All the items to the left and right of the center item need to be
     * animated to their starting positions. This function will
     * figure out what items go where and will animate them there
     */
    function setupStarterRotation() {
      options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;

      data.rightItemsCount = Math.ceil((data.totalItems-1) / 2);
      data.leftItemsCount = Math.floor((data.totalItems-1) / 2);

      // We are in effect rotating the carousel, so we need to set that
      data.carouselRotationsLeft = 1;

      // Center item
      moveItem(data.items[options.startingItem-1], 0);
      data.items[options.startingItem-1].css('opacity', 1);

      // All the items to the right of center
      var itemIndex = options.startingItem - 1;
      for (var pos = 1; pos <= data.rightItemsCount; pos++) {
        (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;

        data.items[itemIndex].css('opacity', 1);
        moveItem(data.items[itemIndex], pos);
      }

      // All items to left of center
      var itemIndex = options.startingItem - 1;
      for (var pos = -1; pos >= data.leftItemsCount*-1; pos--) {
        (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;

        data.items[itemIndex].css('opacity', 1);
        moveItem(data.items[itemIndex], pos);
      }
    }

    /**
     * Given the item and position, this function will calculate the new data
     * for the item. One the calculations are done, it will store that data in
     * the items data object
     */
    function performCalculations($item, newPosition) {
      var newDistanceFromCenter = Math.abs(newPosition);

      // Distance to the center
      if (newDistanceFromCenter < options.flankingItems + 1) {
        var calculations = data.calculations[newDistanceFromCenter];
      } else {
        var calculations = data.calculations[options.flankingItems + 1];
      }

      var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
      var newWidth = distanceFactor * $item.data('original_width');
      var newHeight = distanceFactor * $item.data('original_height');
      var widthDifference = Math.abs($item.width() - newWidth);
      var heightDifference = Math.abs($item.height() - newHeight);

      var newOffset = calculations.offset
      var newDistance = calculations.distance;
      if (newPosition < 0) {
        newDistance *= -1;
      }

      if (options.orientation == 'horizontal') {
        var center = data.containerWidth / 2;
        var newLeft = center + newDistance - (newWidth / 2);
        var newTop = options.horizon - newOffset - (newHeight / 2);
      } else {
        var center = data.containerHeight / 2;
        var newLeft = options.horizon - newOffset - (newWidth / 2);
        var newTop = center + newDistance - (newHeight / 2);
      }

      var newOpacity;
      if (newPosition === 0) {
        newOpacity = 1;
      } else {
        newOpacity = calculations.opacity;
      }

      // Depth will be reverse distance from center
      var newDepth = options.flankingItems + 2 - newDistanceFromCenter;

      $item.data('width',newWidth);
      $item.data('height',newHeight);
      $item.data('top',newTop);
      $item.data('left',newLeft);
      $item.data('oldPosition',$item.data('currentPosition'));
      $item.data('depth',newDepth);
      $item.data('opacity',newOpacity);
    }

    function moveItem($item, newPosition) {
      // Only want to physically move the item if it is within the boundaries
      // or in the first position just outside either boundary
      if (Math.abs(newPosition) <= options.flankingItems + 1) {
        performCalculations($item, newPosition);

        data.itemsAnimating++;

        $item
          .css('z-index',$item.data().depth)
          // Animate the items to their new position values
          .animate({
            left:    $item.data().left,
            width:   $item.data().width,
            height:  $item.data().height,
            top:     $item.data().top,
            opacity: $item.data().opacity
          }, data.currentSpeed, options.animationEasing, function () {
            // Animation for the item has completed, call method
            itemAnimationComplete($item, newPosition);
          });

      } else {
        $item.data('currentPosition', newPosition)
        // Move the item to the 'hidden' position if hasn't been moved yet
        // This is for the intitial setup
        if ($item.data('oldPosition') === 0) {
          $item.css({
            'left':    $item.data().left,
            'width':   $item.data().width,
            'height':  $item.data().height,
            'top':     $item.data().top,
            'opacity': $item.data().opacity,
            'z-index': $item.data().depth
          });
        }
      }

    }

    /**
     * This function is called once an item has finished animating to its
     * given position. Several different statements are executed here, such as
     * dealing with the animation queue
     */
    function itemAnimationComplete($item, newPosition) {
      data.itemsAnimating--;

      $item.data('currentPosition', newPosition);

      // Keep track of what items came and left the center position,
      // so we can fire callbacks when all the rotations are completed
      if (newPosition === 0) {
        data.currentCenterItem = $item;
      }

      // all items have finished their rotation, lets clean up
      if (data.itemsAnimating === 0) {
        data.carouselRotationsLeft -= 1;
        data.currentlyMoving = false;

        // If there are still rotations left in the queue, rotate the carousel again
        // we pass in zero because we don't want to add any additional rotations
        if (data.carouselRotationsLeft > 0) {
          rotateCarousel(0);
        // Otherwise there are no more rotations and...
        } else {
          // Reset the speed of the carousel to original
          data.currentSpeed = options.speed;

          data.currentCenterItem.addClass(options.activeClassName);

          if (data.performingSetup === false) {
            options.movedToCenter(data.currentCenterItem);
            options.movedFromCenter(data.previousCenterItem);
          }

          data.performingSetup = false;
          // reset & initate the autoPlay
          autoPlay();
        }
      }
    }

    /**
     * Function called to rotate the carousel the given number of rotations
     * in the given direciton. Will check to make sure the carousel should
     * be able to move, and then adjust speed and move items
     */
    function rotateCarousel(rotations) {
      // Check to see that a rotation is allowed
      if (data.currentlyMoving === false) {

        // Remove active class from the center item while we rotate
        data.currentCenterItem.removeClass(options.activeClassName);

        data.currentlyMoving = true;
        data.itemsAnimating = 0;
        data.carouselRotationsLeft += rotations;
        
        if (options.quickerForFurther === true) {
          // Figure out how fast the carousel should rotate
          if (rotations > 1) {
            data.currentSpeed = options.speed / rotations;
          }
          // Assure the speed is above the minimum to avoid weird results
          data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
        }

        // Iterate thru each item and move it
        for (var i = 0; i < data.totalItems; i++) {
          var $item = $(data.items[i]);
          var currentPosition = $item.data('currentPosition');

          var newPosition;
          if (data.currentDirection == 'forward') {
            newPosition = currentPosition - 1;
          } else {
            newPosition = currentPosition + 1;
          }
          // We keep both sides as even as possible to allow circular rotation to work.
          // We will "wrap" the item arround to the other side by negating its current position
          var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
          if (Math.abs(newPosition) > flankingAllowance) {
            newPosition = currentPosition * -1;
            // If there's an uneven number of "flanking" items, we need to compenstate for that
            // when we have an item switch sides. The right side will always have 1 more in that case
            if (data.totalItems % 2 == 0) {
              newPosition += 1;
            } 
          }

          moveItem($item, newPosition);
        }
      }
    }

    /**
     * The event handler when an image within the carousel is clicked
     * This function will rotate the carousel the correct number of rotations
     * to get the clicked item to the center, or will fire the custom event
     * the user passed in if the center item is clicked
     */
    $(this).find('img').bind("click", function () {
      var itemPosition = $(this).data().currentPosition;

      if (options.imageNav == false) {
        return;
      }
      // Don't allow hidden items to be clicked
      if (Math.abs(itemPosition) >= options.flankingItems + 1) {
        return;
      }
      // Do nothing if the carousel is already moving
      if (data.currentlyMoving) {
        return;
      }

      data.previousCenterItem = data.currentCenterItem;

      // Remove autoplay
      autoPlay(true);
      options.autoPlay = 0;
      
      var rotations = Math.abs(itemPosition);
      if (itemPosition == 0) {
        options.clickedCenter($(this));
      } else {
        // Fire the 'moving' callbacks
        options.movingFromCenter(data.currentCenterItem);
        options.movingToCenter($(this));
        if (itemPosition < 0) {
          data.currentDirection = 'backward';
          rotateCarousel(rotations);
        } else if (itemPosition > 0) {
          data.currentDirection = 'forward';
          rotateCarousel(rotations);
        }
      }
    });


    /**
     * The user may choose to wrap the images is link tags. If they do this, we need to
     * make sure that they aren't active for certain situations
     */
    $(this).find('a').bind("click", function (event) {
      var isCenter = $(this).find('img').data('currentPosition') == 0;
      // should we disable the links?
      if (options.linkHandling === 1 || // turn off all links
          (options.linkHandling === 2 && !isCenter)) // turn off all links except center
      {
        event.preventDefault();
        return false;
      }
    });

    function nextItemFromCenter() {
      var $next = data.currentCenterItem.next();
      if ($next.length <= 0) {
        $next = data.currentCenterItem.parent().children().first();
      }
      return $next;
    }

    function prevItemFromCenter() {
      var $prev = data.currentCenterItem.prev();
      if ($prev.length <= 0) {
        $prev = data.currentCenterItem.parent().children().last();
      }
      return $prev;
    }

    /**
     * Intiate a move of the carousel in either direction. Takes care of firing
     * the 'moving' callbacks
     */
    function moveOnce(direction) {
      if (data.currentlyMoving === false) {
        data.previousCenterItem = data.currentCenterItem;

        options.movingFromCenter(data.currentCenterItem);
        if (direction == 'backward') {
          options.movingToCenter(prevItemFromCenter());
          data.currentDirection = 'backward';
        } else if (direction == 'forward') {
          options.movingToCenter(nextItemFromCenter());
          data.currentDirection = 'forward';
        }
      }

      rotateCarousel(1);
    }
    
    /**
     * Navigation with arrow keys
     */
    $(document).keydown(function(e) {
      if (options.keyboardNav) {
        // arrow left or up
        if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
          autoPlay(true);
          options.autoPlay = 0;
          moveOnce('backward');
        // arrow right or down
        } else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
          autoPlay(true);
          options.autoPlay = 0;
          moveOnce('forward');
        }
        // should we override the normal functionality for the arrow keys?
        if (options.keyboardNavOverride && (
            (options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) ||
            (options.orientation == 'vertical' && (e.which === 38 || e.which === 40))
          )) {
          e.preventDefault();
          return false;
        }
      }
    });

    /**
     * Public API methods
     */
    this.reload = function (newOptions) {
      if (typeof newOptions === "object") {
        var combineDefaultWith = newOptions;
      } else {
        var combineDefaultWith = {};
      }
      options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);

      initializeCarouselData();
      data.itemsContainer.find('img').hide();
      forceImageDimensionsIfEnabled();

      preload(function () {
        setOriginalItemDimensions();
        preCalculatePositionProperties();
        setupCarousel();
        setupStarterRotation();
      });
    }
    
    this.next = function() {
      autoPlay(true);
      options.autoPlay = 0;

      moveOnce('forward');
    }
    this.prev = function () {
      autoPlay(true);
      options.autoPlay = 0;

      moveOnce('backward');
    }

    this.reload(startingOptions);

    return this;
  };

  $.fn.waterwheelCarousel.defaults = {
    // number tweeks to change apperance
    startingItem:               1,   // item to place in the center of the carousel. Set to 0 for auto
    separation:                 175, // distance between items in carousel
    separationMultiplier:       0.6, // multipled by separation distance to increase/decrease distance for each additional item
    horizonOffset:              0,   // offset each item from the "horizon" by this amount (causes arching)
    horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
    sizeMultiplier:             0.7, // determines how drastically the size of each item changes
    opacityMultiplier:          0.8, // determines how drastically the opacity of each item changes
    horizon:                    0,   // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
    flankingItems:              3,   // the number of items visible on either side of the center                  

	
    // animation
    speed:                      900,      // speed in milliseconds it will take to rotate from one to the next
    animationEasing:            'linear', // the easing effect to use when animating
    quickerForFurther:          true,     // set to true to make animations faster when clicking an item that is far away from the center
    edgeFadeEnabled:            false,    // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image
    
    // misc
    linkHandling:               2,                 // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
    autoPlay:                   0,                 // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
    orientation:                'horizontal',      // indicate if the carousel should be 'horizontal' or 'vertical'
    activeClassName:            'carousel-center', // the name of the class given to the current item in the center
    keyboardNav:                false,             // set to true to move the carousel with the arrow keys
    keyboardNavOverride:        true,              // set to true to override the normal functionality of the arrow keys (prevents scrolling)
    imageNav:                   true,              // clicking a non-center image will rotate that image to the center

    // preloader
    preloadImages:              true,  // disable/enable the image preloader. 
    forcedImageWidth:           0,     // specify width of all images; otherwise the carousel tries to calculate it
    forcedImageHeight:          0,     // specify height of all images; otherwise the carousel tries to calculate it

    // callback functions
    movingToCenter:             $.noop, // fired when an item is about to move to the center position
    movedToCenter:              $.noop, // fired when an item has finished moving to the center
    clickedCenter:              $.noop, // fired when the center item has been clicked
    movingFromCenter:           $.noop, // fired when an item is about to leave the center position
    movedFromCenter:            $.noop  // fired when an item has finished moving from the center
  };

})(jQuery);

/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.7.1',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings, responsiveSettings, breakpoint;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rtl: false,
                slide: '',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                waitForAnimate: true
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = "hidden";
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;
            responsiveSettings = _.options.responsive || null;

            if (responsiveSettings && responsiveSettings.length > -1) {
                _.respondTo = _.options.respondTo || "window";
                for (breakpoint in responsiveSettings) {
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        _.breakpoints.push(responsiveSettings[
                            breakpoint].breakpoint);
                        _.breakpointSettings[responsiveSettings[
                            breakpoint].breakpoint] =
                            responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    if(_.options.mobileFirst === true) {
                        return a - b;
                    } else {
                        return b - a;
                    }
                });
            }

            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                _.hidden = "msHidden";
                _.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.init();

            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function(){
        var _ = this;
        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({height: targetHeight},_.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {}, _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {
        var _ = this, asNavFor = _.options.asNavFor !== null ? $(_.options.asNavFor).slick('getSlick') : null;
        if(asNavFor !== null) asNavFor.slideHandler(index, true);
    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow = $(_.options.prevArrow);
            _.$nextArrow = $(_.options.nextArrow);

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.appendTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
                _.$prevArrow.addClass('slick-disabled');
            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass(
                'slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide +
            ':not(.slick-cloned)').addClass(
            'slick-slide');
        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index",index);
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        if (_.options.accessibility === true) {
            _.$list.prop('tabIndex', 0);
        }

        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.checkResponsive = function(initial) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
          respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
          respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
          respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.originalSettings.responsive && _.originalSettings
            .responsive.length > -1 && _.originalSettings.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick();
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if(initial === true)
                                _.currentSlide = _.options.initialSlide;
                            _.refresh();
                        }
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if(_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick();
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if(initial === true)
                            _.currentSlide = _.options.initialSlide;
                        _.refresh();
                    }
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if(initial === true)
                        _.currentSlide = _.options.initialSlide;
                    _.refresh();
                }
            }

        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        $target.is('a') && event.preventDefault();

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide  - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $(event.target).parent().index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this, navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if(index > navigables[navigables.length -1]){
            index = navigables[navigables.length -1];
        } else {
            for(var n in navigables) {
                if(index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if(_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function() {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass(
            'slick-slide slick-active slick-center slick-visible')
            .removeAttr('data-slick-index')
            .css({
                position: '',
                left: '',
                top: '',
                zIndex: '',
                opacity: '',
                width: ''
            });

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.$list.off('.slick');
        $(window).off('.slick-' + _.instanceUid);
        $(document).off('.slick-' + _.instanceUid);

        _.$slider.html(_.$slides);

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: 1000
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1000
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if(_.options.infinite === true) {
            pagerQty = Math.ceil(_.slideCount / _.options.slidesToScroll);
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount){
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight();

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if(slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if(slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow){
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if(_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;

        if(_.options.infinite === false) {
            max = _.slideCount - _.options.slidesToShow + 1;
            if (_.options.centerMode === true) max = _.slideCount;
        } else {
            breakPoint = _.slideCount * -1;
            counter = _.slideCount * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max){
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll  : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this, slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if(_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide){
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function() {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
        }

        _.$slider.trigger("init", [ _ ]);

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                })
                .on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        if (_.options.autoplay === true) {

            $(document).on(_.visibilityChange, function(){
                _.visibility();
            });

            if( _.options.pauseOnHover === true ) {

                _.$list.on('mouseenter.slick', function(){
                    _.paused = true;
                    _.autoPlayClear();
                });
                _.$list.on('mouseleave.slick', function(){
                    _.paused = false;
                    _.autoPlay();
                });

            }

        }

        if(_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, function() {
            _.checkResponsive();
            _.setPosition();
        });

        $(window).on('resize.slick.slick-' + _.instanceUid, function() {
            if ($(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    _.setPosition();
                }, 50);
            }
        });

        $('*[draggable!=true]', _.$slideTrack).on('dragstart', function(e){ e.preventDefault(); });

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;

        if (event.keyCode === 37 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        } else if (event.keyCode === 39 && _.options.accessibility === true) {
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy');

                image
                  .load(function() { image.animate({ opacity: 1 }, 200); })
                  .css({ opacity: 0 })
                  .attr('src', imageSource)
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading');
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow/2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow/2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow/2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true ) {
                if(rangeStart > 0) rangeStart--;
                if(rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

          if (_.slideCount <= _.options.slidesToShow){
              cloneRange = _.$slider.find('.slick-slide');
              loadImages(cloneRange);
          }else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger("afterChange", [ _, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
            })
         .error(function () {
          targetImage.removeAttr('data-lazy');
          _.progressiveLazyLoad();
         });
        }

    };

    Slick.prototype.refresh = function() {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy();

        $.extend(_, _.initials);

        _.init();

        _.changeSlide({
            data: {
                message: 'index',
                index: currentSlide
            }
        }, true);

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
            'slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        if(_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger("reInit", [ _ ]);

    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if(removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {}, x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if(_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            var trackWidth = 0;
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.children('.slick-slide').each(function(){
                trackWidth += _.listWidth;
            });
            _.$slideTrack.width(Math.ceil(trackWidth) + 1);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if(_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this;
        _.options[option] = value;

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger("setPosition", [ _ ]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if(_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = "-o-transform";
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = "-moz-transform";
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = "-webkit-transform";
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = "-ms-transform";
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = "transform";
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        _.$slider.find('.slick-slide').removeClass('slick-active').removeClass('slick-center');
        allSlides = _.$slider.find('.slick-slide');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if(_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active');
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }

            }

            _.$slides.eq(index).addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active');
            } else if ( allSlides.length <= _.options.slidesToShow ) {
                allSlides.addClass('slick-active');
            } else {
                remainder = _.slideCount%_.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if(_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                    allSlides.slice(indexOffset-(_.options.slidesToShow-remainder), indexOffset + remainder).addClass('slick-active');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active');
                }
            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex-_.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex+_.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;
        var index = parseInt($(event.target).parents('.slick-slide').attr("data-slick-index"));
        if(!index) index = 0;

        if(_.slideCount <= _.options.slidesToShow){
            _.$slider.find('.slick-slide').removeClass('slick-active');
            _.$slides.eq(index).addClass('slick-active');
            if(_.options.centerMode === true) {
                _.$slider.find('.slick-slide').removeClass('slick-center');
                _.$slides.eq(index).addClass('slick-center');
            }
            _.asNavFor(index);
            return;
        }
        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index,sync,dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                if(dontAnimate!==true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger("beforeChange", [ _ , _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if(dontAnimate!==true) {
                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if(dontAnimate!==true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this, slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [  _, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "left"]);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger("swipe", [ _, "right"]);
                    break;
            }
        } else {
            if(_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
           return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
           return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass(
            'slick-slide slick-active slick-visible').css('width', '');

    };

    Slick.prototype.unslick = function() {

        var _ = this;
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this, centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.options.infinite !==
            true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.removeClass('slick-disabled');
            _.$nextArrow.removeClass('slick-disabled');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled');
                _.$nextArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            }
        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if( document[ _.hidden ] ) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            _.paused = false;
            _.autoPlay();
        }

    };

    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments,1), l = _.length, i = 0, ret;
        for(i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick =  new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

    $(function(){
        $('[data-slick]').slick();
    });

}));

$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.center').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    });
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    $('.add-remove').slick({
        dots: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3
    });
    var slideIndex = 1;
    $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.js-remove-slide').on('click', function() {
        $('.add-remove').slick('slickRemove',slideIndex - 1);
        if (slideIndex !== 0){
            slideIndex--;
        }
    });

    $('.filtering').slick({
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    var filtered = false;
    $('.js-filter').on('click', function() {
        if (filtered === false) {
            $('.filtering').slick('slickFilter',':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 166) {
            $('.fixed-header').show();
        } else {
            $('.fixed-header').hide();
        }
    });

    $('ul.nav a').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).attr('href');
        var targetST = $(targetID).offset().top - 48;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 300);
    });

    $('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    $('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3,
        rtl: true
    });

});


var scr=document.getElementsByTagName('script');
var zoombox_path = scr[scr.length-1].getAttribute("src").replace('zoombox.js','');

(function($){

var options = {
    theme       : 'zoombox',      //available themes : zoombox,lightbox, prettyphoto, darkprettyphoto, simple
    opacity     : 0.8,                  // Black overlay opacity
    duration    : 800,                // Animation duration
    animation   : true,             // Do we have to animate the box ?
    width       : 600,                  // Default width
    height      : 400,                  // Default height
    gallery     : true,                 // Allow gallery thumb view
    autoplay : false,                // Autoplay for video
    overflow  : false               // Allow images bigger than screen ?
}
var images;         // Gallery Array [gallery name][link]
var elem;           // HTML element currently used to display box
var isOpen = false; // Zoombox already opened ?
var link;           // Shortcut for the link
var width;
var height;
var timer;          // Timing for img loading
var i = 0;          // iteration variable
var content;        // The content of the box
var type = 'multimedia'; // Content type
var position = false;
var imageset = false;
var state = 'closed';

/**
* You can edit the html code generated by zoombox for specific reasons.
* */
var html = '<div id="zoombox"> \
            <div class="zoombox_mask"></div>\
            <div class="zoombox_container">\
                <div class="zoombox_content"></div>\
                <a class="zoombox_title"></a>\
                <div class="zoombox_next"></div>\
                <div class="zoombox_prev"></div>\
                <div class="zoombox_close"></div>\
            </div>\
            <div class="zoombox_gallery"></div>\
        </div>';
// Regular expressions needed for the content
var filtreImg=                  /(\.jpg)|(\.jpeg)|(\.bmp)|(\.gif)|(\.png)/i;
var filtreMP3=			/(\.mp3)/i;
var filtreFLV=			/(\.flv)/i;
var filtreSWF=			/(\.swf)/i;
var filtreQuicktime=	/(\.mov)|(\.mp4)/i;
var filtreWMV=			/(\.wmv)|(\.avi)/i;
var filtreDailymotion=	/(http:\/\/www.dailymotion)|(http:\/\/dailymotion)/i;
var filtreVimeo=		/(http:\/\/www.vimeo)|(http:\/\/vimeo)/i;
var filtreYoutube=		/(youtube\.)/i;
var filtreKoreus=		/(http:\/\/www\.koreus)|(http:\/\/koreus)/i;
var galleryLoaded = 0;

$.zoombox = function(el,options) {

}
$.zoombox.options = options;
$.zoombox.close = function() {
    close();
}
$.zoombox.open = function(tmplink,opts){
    elem = null;
    link = tmplink;
    //alert("teste");
    options = $.extend({},$.zoombox.options,opts);
    load();
}
$.zoombox.html = function(cont,opts){
    content = cont;
    options = $.extend({},$.zoombox.options,opts);
    width = options.width;
    height = options.height;
    elem = null;
    open();
}
$.fn.zoombox = function(opts){

    images = new Array(); // allow multiple call on one page, for content loaded from ajax

    /**
     * Bind the behaviour on every Elements
     */
    return this.each(function(){
        // No zoombox for IE6
        if($.browser && $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest){
            return false;
        }
        var obj = this;
        var galleryRegExp =  /zgallery([0-9]+)/;
        var skipRegExp =  /zskip/;
        var gallery = galleryRegExp.exec($(this).attr("class"));
        var skip = skipRegExp.exec($(this).attr("class"));
        var tmpimageset = false;
        if(gallery != null){
            if(!images[gallery[1]]){
                images[gallery[1]]=new Array();
            }
            if (skip == null) {
                images[gallery[1]].push($(this));
            }
            var pos = images[gallery[1]].length-1;
            tmpimageset = images[gallery[1]];
        }
        $(this).unbind('click').click(function(){
            options = $.extend({},$.zoombox.options,opts);
            if(state!='closed') return false;
            if (skip != null) {
                if (pos < images[gallery[1]].length-1) {
                    elem = images[gallery[1]][pos+1];
                }
            } else {   
                elem = $(obj);
            }
            imageset = tmpimageset;
            link = elem.attr('href');
            position = pos;
            load();
            return false;
        });
    });
}

/**
 * Load the content (with or without loader) and call open()
 * */
function load(){
    if(state=='closed') isOpen = false;
    state = 'load';
    setDim();
    if(filtreImg.test(link)){
        img=new Image();
        img.src=link;
        $("body").append('<div id="zoombox_loader"></div>');
        $("#zoombox_loader").css("marginTop",scrollY());
        timer = window.setInterval(function(){loadImg(img);},100);
    }else{
        setContent();
        open();
    }
}

/**
 * Build the HTML Structure of the box
 * */
function build(){
    // We add the HTML Code on our page
    $('body').append(html);
    $(window).keydown(function(event){
        shortcut(event.which);
    });
    $(window).resize(function(){
        resize();
    });
    $('#zoombox .zoombox_mask').hide();
    // We add a specific class to define the box theme
    $('#zoombox').addClass(options.theme);
    // We bind the close behaviour (click on the mask / click on the close button)
    $('#zoombox .zoombox_mask,.zoombox_close').click(function(){
        close();
        return false;
    });
    // Next/Prev button
    if(imageset == false){
        $('#zoombox .zoombox_next,#zoombox .zoombox_prev').remove();
    }else{
        $('#zoombox .zoombox_next').click(function(){
            next();
        });
        $('#zoombox .zoombox_prev').click(function(){
            prev();
        });
    }
}

/**
*   Gallery System (with slider if too much images)
*/
function gallery(){
    var loaded = 0;
    var width = 0;
    var contentWidth = 0;
    if(options.gallery){
        if(imageset === false){
            $('#zoombox .zoombox_gallery').remove();
            return false;
        }
        for(var i in imageset){
            var imgSrc = zoombox_path+'img/video.png';
            var img = $('<img src="'+imgSrc+'" class="video gallery'+(i*1)+'"/>');
            if(filtreImg.test(imageset[i].attr('href'))){
               imgSrc = imageset[i].attr('href')
               img = $('<img src="'+imgSrc+'" class="gallery'+(i*1)+'"/>');
            }
            img.data('id',i).appendTo('#zoombox .zoombox_gallery')
            img.click(function(){
               gotoSlide($(this).data('id'));
               $('#zoombox .zoombox_gallery img').removeClass('current');
               $(this).addClass('current');
            });
            if(i==position){ img.addClass('current'); }

            // Listen the loading of Images
            $("<img/>").data('img',img).attr("src", imgSrc).load(function() {
                    loaded++;
                    var img = $(this).data('img');
                    img.width(Math.round(img.height() * this.width/this.height));
                    if(loaded == $('#zoombox .zoombox_gallery img').length){
                        var width = 0;
                        $('#zoombox .zoombox_gallery img').each(function(){
                            width += $(this).outerWidth();
                            $(this).data('left',width);
                        });
                        var div = $('<div>').css({
                            position:'absolute',
                            top:0,
                            left:0,
                            width: width
                        });
                        $('#zoombox .zoombox_gallery').wrapInner(div);
                        contentWidth = $('#zoombox .zoombox_gallery').width();
                        $('#zoombox').trigger('change');
                    }
                });
        }
        $('#zoombox .zoombox_gallery').show().animate({bottom:0},options.duration);
    }

    $('#zoombox').bind('change',function(e,css){
        if($('#zoombox .zoombox_gallery div').width() < $('#zoombox .zoombox_gallery').width){
            return true;
        }
        var d = 0;
        var center = 0;
        if(css != null){
            d = options.duration;
            center = css.width / 2;
        }else{
            center = $('#zoombox .zoombox_gallery').width()/2;
        }
        var decal = - $('#zoombox .zoombox_gallery img.current').data('left') + $('#zoombox .zoombox_gallery img.current').width() / 2;
        var left = decal + center;
        if(left < center * 2 - $('#zoombox .zoombox_gallery div').width() ){
            left = center * 2 - $('#zoombox .zoombox_gallery div').width();
        }
        if(left > 0){
            left = 0;
        }
        $('#zoombox .zoombox_gallery div').animate({left:left},d);
    });

}


/**
 * Open the box
 **/
function open(){
    if(isOpen == false) build(); else $('#zoombox .zoombox_title').empty();
    $('#zoombox .close').hide();
    $('#zoombox .zoombox_container').removeClass('multimedia').removeClass('img').addClass(type);

    // We add a title if we find one on the link
    if(elem != null && elem.attr('title')){

        // $('#zoombox .zoombox_title').append(elem.attr('title'));

         //$('#zoombox .zoombox_title').attr('href',elem.attr('title'));

         var x=elem.attr('title');
         var tab=x.split("+");
         $('#zoombox .zoombox_title').attr('href',tab[0]);
         $('#zoombox .zoombox_title').html(tab[1]);

//alert(tab[1]);
    }



    // And after... Animation or not depending of preferences
    // We empty the content
    $('#zoombox .zoombox_content').empty();
    // If it's an image we load the content now (to get a good animation)
    if(type=='img' && isOpen == false && options.animation == true){
        $('#zoombox .zoombox_content').append(content);
    }
    // Default position/size of the box to make the "zoom effect"
    if(elem != null && elem.find('img').length != 0 && isOpen == false){
        var min = elem.find('img');
        $('#zoombox .zoombox_container').css({
            width : min.width(),
            height: min.height(),
            top : min.offset().top,
            left : min.offset().left,
            opacity:0,
            marginTop : min.css('marginTop')
        });
    }else if(elem != null && isOpen == false){
        $('#zoombox .zoombox_container').css({
           width:   elem.width(),
           height:  elem.height(),
           top:elem.offset().top,
           left:elem.offset().left
        });
    }else if(isOpen == false){
        $('#zoombox .zoombox_container').css({
            width: 100,
            height: 100,
            top:windowH()/2-50,
            left:windowW()/2-50
        })
    }
    // Final position/size of the box after the animation
    var css = {
        width : width,
        height: height,
        left  : (windowW() - width) / 2,
        top   : (windowH() - height) / 2,
        marginTop : scrollY(),
        opacity:1
    };

    // Trigger the change event
    $('#zoombox').trigger('change',css);

    // Do we animate or not ?
    if(options.animation == true){
        // $('#zoombox .zoombox_title').hide();
        // $('#zoombox .zoombox_close').hide();
        $('#zoombox .zoombox_container').animate(css,options.duration,function(){
            if(type == 'multimedia' || isOpen == true){
                $('#zoombox .zoombox_content').append(content);
            }
            if(type == 'image' || isOpen == true){
                $('#zoombox .zoombox_content img').css('opacity',0).fadeTo(300,1);
            }
            $('#zoombox .zoombox_title').fadeIn(300);
            $('#zoombox .zoombox_close').fadeIn(300);
            state = 'opened';
            if(!isOpen){
                gallery();
            }
            isOpen = true;
        });
        $('#zoombox .zoombox_mask').fadeTo(200,options.opacity);
    }else{
        $('#zoombox .zoombox_content').append(content);
        $('#zoombox .zoombox_close').show();
        $('#zoombox .zoombox_gallery').show();
        $('#zoombox .zoombox_container').css(css);
        $('#zoombox .zoombox_mask').show();
        $('#zoombox .zoombox_mask').css('opacity',options.opacity);
        if(!isOpen){
            gallery();
        }
        isOpen = true;
        state = 'opened';
    }
}
/**
 * Close the box
 * **/
function close(){
    state = 'closing';
    window.clearInterval(timer);
    $(window).unbind('keydown');
    $(window).unbind('resize');
    if(type == 'multimedia'){
        $('#zoombox .zoombox_container').empty();
    }
    var css = {};
    if(elem != null && elem.find('img').length > 0){
        var min = elem.find('img');
        css ={
            width : min.width(),
            height: min.height(),
            top : min.offset().top,
            left : min.offset().left,
            opacity:0,
            marginTop : min.css('marginTop')
        };
    }else if(elem!=null){
        css = {
           width:   elem.width(),
           height:  elem.height(),
           top:elem.offset().top,
           left:elem.offset().left,
           marginTop:0,
           opacity:0
        };
    }else{
        css = {
            width: 100,
            height: 100,
            top:windowH()/2-50,
            left:windowW()/2-50,
            opacity : 0
        };
    }
    if(options.animation == true){
        $('#zoombox .zoombox_mask').fadeOut(200);
        $('#zoombox .zoombox_gallery').animate({bottom:-$('#zoombox .zoombox_gallery').innerHeight()},options.duration);
        $('#zoombox .zoombox_container').animate(css,options.duration,function(){
            $('#zoombox').remove();
            state = 'closed';
			isOpen = false;
        });
    }else{
        $('#zoombox').remove();
        state = 'closed';
		isOpen = false;
    }
}

/**
 * Set the HTML Content of the box
 * */
function setContent(){
    // Overtflow
    if(options.overflow == false){
        if(width*1 + 50 > windowW()){
            height = (windowW() - 50) * height / width;
            width = windowW() - 50;
        }
        if(height*1 + 50 > windowH()){
            width = (windowH()-50) * width / height;
            height = windowH() - 50;
        }
    }
    var url = link;
    type = 'multimedia';
        type = 'img';
        content='<img src="'+link+'" width="100%" height="100%"/>';
    
    return content;
}
/**
 *  Handle Image loading
 **/
function loadImg(img){
    if(img.complete){
            i=0;
            window.clearInterval(timer);
            width=img.width;
            height=img.height;
            $('#zoombox_loader').remove();
            setContent();
            open();
    }
    // On anim le loader
    $('#zoombox_loader').css({'background-position': "0px "+i+"px"});
    i=i-40;
    if(i<(-440)){i=0;}
}

function gotoSlide(i){
    if(state != 'opened'){ return false; }
    if (imageset) {
        position = i;
        elem = imageset[position];
        link = elem.attr('href');
        if($('#zoombox .zoombox_gallery img').length > 0){
            $('#zoombox .zoombox_gallery img').removeClass('current');
            $('#zoombox .zoombox_gallery img:eq('+i+')').addClass('current');
        }
        load();
    }
    return false;
}

function next(){
    i = position+1;
    if(i  > imageset.length-1){
        i = 0;
    }
    gotoSlide(i);
}

function prev(){
    i = position-1;
    if(i < 0){
        i = imageset.length-1;
    }
    gotoSlide(i);
}

/**
 * GENERAL FUNCTIONS
 * */
/**
 * Resize
 **/
function resize(){
    $('#zoombox .zoombox_container').css({
        top : (windowH() - $('#zoombox .zoombox_container').outerHeight(true)) / 2,
        left : (windowW() - $('#zoombox .zoombox_container').outerWidth(true)) / 2
    });
}
/**
 * Keyboard Shortcut
 **/
function shortcut(key){
    if(key == 37){
        prev();
    }
    if(key == 39){
        next();
    }
    if(key == 27){
        close();
    }

}
/**
 * Parse Width/Height of a link and insert it in the width and height variables
 * */
function setDim(){
    width = options.width;
    height = options.height;
    if(elem!=null){
        var widthReg = /w([0-9]+)/;
        var w = widthReg.exec(elem.attr("class"));
        if(w != null){
            if(w[1]){
                width = w[1];
            }
        }
        var heightReg = /h([0-9]+)/;
        var h = heightReg.exec(elem.attr("class"));
        if(h != null){
            if(h[1]){
                height = h[1];
            }
        }
    }
    return false;
}
/**
* Return the window height
* */
function windowH(){
        if (window.innerHeight) return window.innerHeight  ;
        else{return $(window).height();}
}

/**
 * Return the window width
 * */
function windowW(){
        if (window.innerWidth) return window.innerWidth  ;
        else{return $(window).width();}
}

/**
 *  Return the position of the top
 *  */
function scrollY() {
        scrOfY = 0;
        if( typeof( window.pageYOffset ) == 'number' ) {
                //Netscape compliant
                scrOfY = window.pageYOffset;
        } else if( document.body && ( document.body.scrollTop ) ) {
                //DOM compliant
                scrOfY = document.body.scrollTop;
        } else if( document.documentElement && ( document.documentElement.scrollTop ) ) {
                //IE6 standards compliant mode
                scrOfY = document.documentElement.scrollTop;
        }
        return scrOfY;
}

/**
 *  Return the position of the left scroll
 *  */
function scrollX(){
        scrOfX = 0;
        if( typeof( window.pageXOffset ) == 'number' ) {
                //Netscape compliant
                scrOfX = window.pageXOffset;
        } else if( document.body && ( document.body.scrollLeft ) ) {
                //DOM compliant
                scrOfX = document.body.scrollLeft;
        } else if( document.documentElement && ( document.documentElement.scrollLeft ) ) {
                //IE6 standards compliant mode
                scrOfX = document.documentElement.scrollLeft;
        }
         return scrOfX;
}

})(jQuery);


if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=6000,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});


/*global console:false */
/*
 * jQuery paged scroll  - different approach for infinite scroll
 *
 * Copyright (c) 2013 Dmitry Mogilko
 * Licensed under the MIT license.
 */

/*
 /* Finish now
 TODO  : horizontal scroll.
/* Finish later
 TODO :  qunit ,simulate scroll - http://stackoverflow.com/questions/6761659/simulate-scroll-event-using-javascript
 TODO :  think about  giving option of calculating trigger on last element of the binder,may be use waypoints plugin.
 TODO  : think about disabling scroll until targetHtml is changed or callback called.

 */
(function ($, window, document, undefined) {
    'use strict';

    /*
     Constructor
     */
    $.ajax_scroll = function (element, options) {

        this.settings = $.extend({},$.ajax_scroll.defaults, options);

        /*
         check if we have everything valid before we start
         */
        this._validate(this.settings);

        /*
         init plugin
        */
        this.timerInterval = -1;
        this.lastDocHeight = 0;
        this.proccesingCallback = false;
        this.lastScrollPosition = 0;
        this.lastHtmlLength = $(this.settings.targetElement).html().length;
        this.instanceID = "paged_scroll" + Math.round(Math.random() * 9999999999);
        var $this = this;

        /*
            create on scroll event handler
         */
        var scrollProcess = (function ($this) {
            return function () {
                if ($this.settings.useScrollOptimization) {
                    if ($this.timerInterval === -1) {
                        $this._debug("Setting timeout:", $this.settings.checkScrollChange);
                        $this.timerInterval = setTimeout(function () {
                            //$this.debug("Running after timeout:");
                            $this._checkScroll(element, $, window, document, $this.settings);
                            $this.timerInterval = -1;

                        }, $this.settings.checkScrollChange);
                    }
                    else {
                        //$this._debug('Ignore this scroll...And saving all the DOM access and calculations');
                    }

                }
                else {
                    $this._checkScroll(element, $, window, document, $this.settings);
                }
            };

        })($this);

        //bind on scroll
        $(element).on('scroll', scrollProcess);
    };

    /*
     Plugin defaults
     */
    $.ajax_scroll.defaults = {

        /*
         required
         your  callback which called which will be called with current page number
         */
        handleScroll:function (page, container, doneCallback) {
            return true;
        },

        /*
         required
         amount of pixels or amount of percent of container (calculated to pixel by plugin) from bottom, to start scroll
         */
        triggerFromBottom:'10%',

        /*
            html to show when loading
        */
        loading : {
             html:'<div class="load"><img src="css/ajax-loader.gif" alt="Loading..."></div>'
              
        },

    /*
     required
     element where content will be inserted
     */
        targetElement:null,

        /*
         optional,default is 0
         page number to start with
         */
        startPage:0,

        /*
         optional
         null means infinite scroll
         */
        pagesToScroll:null,

        /*  optional
         before page hook ,if returns false execution stops
         */
        beforePageChanged:function (page, container) {
            return true;
        },

        /*
         optional
         after page scroll callback
         */
        afterPageChanged:function (page, container) {
            return true;
        },

        /*
         optional
         NOT RECOMMENDED to CHANGE!!!
         default : true
         if scroll optimization used ,plugin will not access DOM each time scroll is triggered and will save a lot of overhead,because of not calling callback logic each time
         */
        useScrollOptimization:true,

        /*
         timeout in milliseconds to use in order to check  if scroll change is significant enough to call the "handleScroll" callback
         */
        checkScrollChange:500,

        /*
            frequency to check that target html is checked
        */
        monitorChangeInterval : 300,

        /*
         if monitor target element where finally generated content is inserted

         */
        monitorTargetChange:true,
        /*
         if use debug
         */
        debug:false
    };

    /*
     Use prototype to optimize multiple instances
     */
    $.ajax_scroll.prototype = {

        _calculateStep:function (settings) {
            return (settings.triggerFromBottom.toString().indexOf('%') > -1) ? parseFloat(settings.triggerFromBottom.replace('%', '')) : parseFloat(settings.triggerFromBottom);
        },

        _validate:function (settings) {
            var step = this._calculateStep(settings);
            if (isNaN(step)) {
                throw "Step need to be provided as number or percentage,50 or 5% fro percent for example";
            }
            if (!settings.targetElement || $(settings.targetElement).length === 0) {
                throw "Please provide the selector of target element.(Element where you finally insert the new content)";
            }

        },

        _checkCallbackDone : function(settings,loadingHtml){
            this._debug("Checking target html for change...");
            if (settings.monitorTargetChange && $(settings.targetElement).is(":visible") ) {
                var lastHtmlLength = $(settings.targetElement).html().length;
                if (lastHtmlLength !== this.lastHtmlLength) {
                    this._debug("Html is changed");
                    this.lastHtmlLength = lastHtmlLength;
                    this.proccesingCallback = false;
                    $(loadingHtml).hide();
                }
                else{
                    var $this = this;
                    this._debug("Html is not changed.Check later");
                    setTimeout(function(){$this._checkCallbackDone.call($this,$this.settings,loadingHtml);},$this.settings.monitorChangeInterval);
                }

            }
        },

        _getScrollData:function ($, element, window, document, $this, settings) {
            var elemHeight = parseFloat($(element).height()) , elemScroll = parseFloat($(element).scrollTop()),
                isWindow = (element.self === window) , docHeight = isWindow ? parseFloat($(document).height()) : elemHeight,
                step = docHeight / $this._calculateStep(settings);
            return {elemHeight:elemHeight, elemScroll:elemScroll, isWindow:isWindow, docHeight:docHeight, step:step};
        },

        /*
            plugin logic which check if we need to call the callback
        */
        _checkScroll:function (element, $, window, document, settings) {
            this._debug("Checking scroll on  : " + this.instanceID);
            var $this = this;
            //if element on which content is inserted became not visible don't do exit
            if (settings.targetElement && !$(settings.targetElement).is(":visible")) {
                $this._debug("Ignoring the call because target element is not  visible.Exit scroll check ..");
                return;
            }

            /*
                check if callback is still in process
             */
            if ($this.proccesingCallback) {
                $this._debug("Processing callback.Exit...");
                return;
            }


            /*
                get all scroll data in order to understand if we at requested scroll point
            */
            var scrollData = $this._getScrollData($, element, window, document, $this, settings);
            var elemHeight = scrollData.elemHeight;
            var elemScroll = scrollData.elemScroll;
            var isWindow = scrollData.isWindow;
            var docHeight = scrollData.docHeight;
            var step = scrollData.step;

            $this._debug(["Elem height : ", elemHeight, ".Elem scroll :", elemScroll, ".Step is :", step, ".DocHeight :", docHeight, ".Last element height:", $this.lastDocHeight].join(""));
             /*
                calculate  window height + scroll  + step
             */
            var position = isWindow ? elemHeight + elemScroll + step : elemScroll + step;
            $this._debug("Position:" + position + ".Last position:" + $this.lastScrollPosition + ".Last element height:" + $this.lastDocHeight);
            var isPos = (position > $this.lastScrollPosition);
            /*
             understand if we have infinite pages number to scroll and if not, understand we are still not scrolled maximum o page requested.
             */
            var isPageMax = !settings.pagesToScroll || (settings.pagesToScroll && (settings.startPage < settings.pagesToScroll));


            /*
             check that we are at the requested scroll position
             */
            if (position >= docHeight) {
                /*
                 don't handle scrolling back to top and also check if we got to maximum pages to scroll
                 */
                if (isPos && isPageMax) {
                    this.lastScrollPosition = position;
                    this.lastDocHeight = docHeight;
                    settings.startPage = settings.startPage + 1;
                    settings.beforePageChanged(settings.startPage, element);
                    $this._debug("Calling 'handleScroll' callback");
                    $this.proccesingCallback = true;
                    var loadingHtml = $($this.settings.loading.html).appendTo($($this.settings.targetElement));
                    $this.lastHtmlLength = $(settings.targetElement).html().length;
                    settings.handleScroll(settings.startPage, element, function () {
                        $this._debug("Callback done.");
                        $this.proccesingCallback = false;
                        loadingHtml.hide();
                    });

                    $this._checkCallbackDone.call($this, $this.settings, loadingHtml);
                    settings.afterPageChanged(settings.startPage, element);


                }

            }
        }, ///check scroll

        /*
         borrowed from  paul irish infinite scroll : hhttps://github.com/paulirish/infinite-scroll - make use of console safe
         */
        _debug:function () {
            try
            {


            if (!this.settings.debug) {
                return;
            }

            // if (typeof console !== 'undefined' && typeof console.log === 'function') {
            //     // Modern browsers
            //     // Single argument, which is a string
            //     if ((Array.prototype.slice.call(arguments)).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === 'string') {
            //         console.log((Array.prototype.slice.call(arguments)).toString());
            //     } else {
            //         console.log(Array.prototype.slice.call(arguments));
            //     }
            // } else if (!Function.prototype.bind && typeof console !== 'undefined' && typeof console.log === 'object') {
            //     // IE8
            //     Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            // }
        }
        catch(e){

        }


        }



    };

    /*
     create scroll instances
     */
    $.fn.paged_scroll = function (options) {
        return this.each(function () {
            var instance = new $.ajax_scroll(this, options);
            $.data(this, 'jqueryPagedScroll', instance);
        });
    };


}(jQuery, window, document));


/**
 * Translator Revolution Lite
 * http://goo.gl/1kVfu
 *
 * LICENSE
 *
 * You need to buy a license if you want use this script.
 * http://codecanyon.net/legal/membership/
 *
 * @package    Translator Revolution Lite
 * @copyright  Copyright (c) 2012, Federico Stabile, surstudio.net
 * @license    http://codecanyon.net/licenses/regular_extended/
 * @version    1.8.3
 * @date       2012-09-19
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('L.1x.1h({M:D(b){J w.1k(D(){B a=1a L.7c(w,b);L.M.5B[a.7h()]=a})}});L.7c=D(k,l){B m;w.A=1g;w.1c=1g;w.1r=1g;w.2t=1g;w.2m=1g;w.3N=0;B n={};w.88=D(a,b){w.6k(b);w.44(a);C(w.6S()){w.7a();w.7Q();w.8g()}R{2z{B c=[];C(w.A.1l[0]=="")c.1e("az 1l 8K.");c.1e("8O M...");3b.3t(c.3E(" "))}2F(e){};w.6F()}};w.7h=D(){J w.A.1n};w.6F=D(){w.1c.ap()};w.6S=D(){C(18 w.A.6q!="1b"&&w.A.6q.K==56){4P("2X 2Z aL. aS 2X 2Z aT 1K be aU 35 7l aV 3D, aW 35 7l aY.1V.6C b6.");J N}J w.A.1l[0]!=""&&!w.A.b7};w.7Q=D(){C(18 w.A.2V=="D"||18 w.A.2V=="1z")C(w.A.2V.1y)w.A.2V(w,w.A)};w.6k=D(h){w.A=L.1h({},h);C(w.A.1l==m)w.A.1l=["4S","6h","6g","6e","66","8l","7W","2R"];C(!(w.A.1l 4h 2O))w.A.1l=[w.A.1l];C(w.A.2j==m||!w.1s(w.A.2j))w.A.2j=Q;C(w.A.1I==m||!w.1s(w.A.1I))w.A.1I=Q;C(w.A.2N==m||!w.1s(w.A.2N))w.A.2N=N;C(w.A.5R==m)w.A.5R="6E";C(w.A.5y==m)w.A.5y="2J:6s, .bi-1K-O-bk, .bl-O";C(w.A.1W==m||!w.1s(w.A.1W))w.A.1W=Q;C(w.A.4n==m||!w.1s(w.A.4n))w.A.4n=Q;C(w.A.1d==m||!w.1s(w.A.1d))w.A.1d=N;C(w.A.2e==m||!4o(w.A.2e))w.A.2e=30;R{w.A.2e=4o(w.A.2e);C(w.A.2e>5M)w.A.2e=5M}C(w.A.2D==m||!w.1s(w.A.2D))w.A.2D=N;C(w.A.1P==m||!4o(w.A.1P))w.A.1P=5;R{w.A.1P=4o(w.A.1P);C(w.A.1P>10)w.A.1P=5}C(w.A.1n==m)w.A.1n="M-1A";R w.A.1n.W(/\\s+/g,"-");C(w.A.V==m||w.A.V=="")w.A.V="4S";C(w.A.3k==m||!w.1s(w.A.3k))w.A.3k=Q;C(w.A.53==m)w.A.53="";C(w.A.2V==m)w.A.2V=D(a,b){};C(w.A.2B==m)w.A.2B=D(a,b,c,d,e){};C(w.A.1L==m)w.A.1L=D(a,b,c,d,e,f,g){};C(w.A.5u==m)w.A.5u=\'<2i 1V="{{ 6p }}"><6l bx="0" by="0" bz="0"><8o><5z>{{ 3V }}</5z></8o></6l></2i>\';C(w.A.4F==m)w.A.4F=\'<5s 1V="5s-{{ 5K }}"><a 6z="6H:;" 6M="{{ 2Y }}" 1V="{{ 5K }}">{{ 3V }}</a></5s>\';C(w.A.4z==m)w.A.4z=\'<bR 2P="{{ 2P }}" 7o="{{ 2Y }}" />\';C(w.A.5C==m)w.A.5C=\'<8q>{{ 2Y }}</8q>\';C(w.A.2w==m||!w.1s(w.A.2w))w.A.2w=Q;C(w.A.2k==m||!w.1s(w.A.2k))w.A.2k=Q;C(w.A.1i==m||!w.1s(w.A.1i))w.A.1i=Q;C(w.A.4D==m)w.A.4D=\'<2i 1V="{{ 7I }} {{ 7Y }}"><a 6z="6H:;" 6M="85" 1V="{{ 87 }}">85</a></2i>\';C(w.A.4E==m)w.A.4E="bw/";C(w.A.1E==m)w.A.1E="M-6o-";C(w.A.2s==m)w.A.2s="M-6x-6o-";C(w.A.4L==m)w.A.4L="M-2j";C(w.A.4W==m)w.A.4W="M-1I";C(w.A.55==m)w.A.55="M-79-1I";C(w.A.5a==m)w.A.5a="M-2j-7q-1I";C(w.A.5c==m)w.A.5c="M-2j-7q-79-1I";C(w.A.3v==m)w.A.3v="M-2k-5t";C(w.A.2q==m)w.A.2q="M-bv-5t";C(w.A.4v==m)w.A.4v="M-4u";C(w.A.4s==m)w.A.4s="M-4u-6x";C(w.A.4A==m)w.A.4A="M-bu-4u";C(w.A.3f==m)w.A.3f="M-2w";C(w.A.3h==m)w.A.3h="M-2w-4u";C(w.A.4G==m)w.A.4G="M-6s";w.A.4H=w.7b();C(18 w.A.7f=="1z")w.A=L.1h(w.A,w.A.7f);w.A.3i=L.1h({},L.O().4M());w.7G();w.A.1F=w;w.7L();w.7M()};w.7b=D(){B a=1D.bt("86");B b="";C(a&&a.K>0)P(B i=0;i<a.K;i++)C(a[i].2P&&a[i].2P.2C(/1A\\.M\\.65\\.6j/))b=a[i].2P.W(/(.*)1A\\.M\\.65\\.6j.*/,"$1");J b+"../bs/bq.1V.6C"};w.7a=D(){C(18 1d=="1b")J;C(!w.A.1d){1d.6r();J}B a=w.A.1n+"6t";C(w.A.2D&&!1d.4r(a)){B b=1a 1Z();1d.6r();1d.5O(a,b.6J())}R C(!w.A.2D)1d.6K(a)},w.7G=D(){C(18 w.A.6L!="1z")J;w.A.3i=L.1h(w.A.3i,w.A.6L)};w.7M=D(){B a=1D.4q("2i");B b;C(w.A.2w){b=1D.4q("2i");b.2v=w.A.3f;a.4p(b)}C(w.A.2k){b=1D.4q("2i");b.2v=w.A.3v;a.4p(b)}C(w.A.1i){b=1D.4q("2i");b.2v=w.A.2q;a.4p(b)}a.4C.bp="bo";a.4C.5t="-7z";a.4C.bn="-7z";1D.6E.4p(a)};w.7L=D(){P(B i=0;i<L.M.3B.K;i++)C(w.A.1n==L.M.3B[i])w.A.1n+="-"+L.M.3B.K;L.M.3B.1e(w.A.1n)};w.44=D(a){w.1c=L(a);w.7K();C(w.A.2j){C(w.A.1I){C(w.A.2N)w.1c.1w(w.A.5c);R w.1c.1w(w.A.5a)}R w.1c.1w(w.A.4L)}R C(w.A.1I){C(w.A.2N)w.1c.1w(w.A.55);R w.1c.1w(w.A.4W)}w.A.1c=w.1c;w.2t=w.1c.2f("[1V^="+w.A.1E+"]");P(B i=0;i<w.2t.K;i++)w.2t[i].1F=w;w.2m=w.1c.2f("."+w.A.3f);P(B i=0;i<w.2m.K;i++)w.2m[i].1F=w};w.7K=D(){B a=w.1c.2f("[1V^="+w.A.1E+"]");B b=Q;B c=1a 2G("\\\\b"+w.A.1E+"([a-bm-Z\\-]{2,6})\\\\b");P(B i=0;i<a.K;i++)C(c.2H(a[i].2v))b=N;C(a.K==0||(a.K>0&&b)){w.1c.5b(w.68());C(18 w.A.6f=="1b")w.1c.1w(w.A.4v);R w.1c.1w(w.A.4s);w.1c.1w(w.A.1n)}};w.8g=D(){w.2t.6i(D(){C(L.M.4m.5i())J;L(w).bj();C(w.1F.1r&&w.1F.1r.28(0)==w){w.1F.2I();J}w.1F.2b(w)});w.2m.6i(D(){C(L.M.4m.5i())J;w.1F.2I()});B a=Q;C(w.A.1W){B b=L.3c("M-"+w.A.1n+"-X");C(b!=m){b=b.19();B c=w.1c.2f("."+w.A.2s+b);C(c.K>0){w.2b(c.28(0));a=N}R{c=w.1c.2f("."+w.A.1E+b);B d=1a 2G("\\\\b"+w.A.2s+".*\\\\b");P(B i=0;i<c.K;i++){B e=d.2H(c.28(i).2v);C(!e){w.2b(c.28(i));a=N;1f}}}}}C(a&&w.A.3k&&w.A.1i){B f="."+w.A.1E+w.A.V;B c=w.1c.2f(f.19());C(c.K>0){w.1r=L(c.28(0));w.1r.1w(w.A.2q)}}};w.2I=D(){w.3e(N);L.3c("M-"+w.A.1n+"-X",1g,{2K:"/"});B a=w.A.V;B b="."+w.A.1E+a;B c=w.1c.2f(b.19());w.1r=L(c.28(0));w.4l(a,w.A,Q)};w.bh=D(a){B b=w.2L(a);C(w.1r){C(w.2L(w.1r.28(0))==b)J N}R C(b==w.A.V)J N;J Q};w.2b=D(a){B b=w.2L(a);C(b==w.A.V){w.2I();J}w.6R(a);C(w.A.1W){C(w.A.4n)L.3c("M-"+w.A.1n+"-X",w.5Q(a),{1p:5M,2K:"/"});R L.3c("M-"+w.A.1n+"-X",w.5Q(a),{2K:"/"})}C(!w.7d(b))w.4j(w,b);R w.4l(b,w.A,N)};w.7g=D(){w.3N++},w.7n=D(){w.3N=0},w.4y=D(){J w.3N>=3},w.7d=D(a){B b=w.A.V+"1j"+a;B c=n[b];C(!c)J N;C(c.1m)J N;C(c.1p)J c.1p>1a 1Z();R J Q};w.2Q=D(a){B b=["1S 2X 2Z","1S 3m 4d 7N","1S 3m 4d 7O","1S 7S 2X 2Z","7U 1K 7V"];B c;P(B i=0;i<b.K;i++){c=1a 2G(b[i]);C(c.2H(a)){4P(a);J Q}}};w.4j=D(d,e){B f=1a L.M.1B();f.2S=D(a){B b=d.A.V+"1j"+e;n[b]=L.M.4I.4J(a);C(n[b].1m){C(n[b].1m==="4K 8h"){C(!d.4y()){d.2o(n[b].1m);d.4j(d,e);J}}d.2o(n[b].1m);d.3p(d.A);d.2I();J}R d.7n();C(n[b].1p){B c=1a 1Z();n[b].1p=c.bd(c.bc()+n[b].1p)}d.4l(e,d.A,N)};f.1q("4N","6a");f.1q("f",w.A.V);f.1q("t",e);w.7g();f.4O(w.A.4H)};w.2o=D(a){2z{C(a 4h 2O){P(B i=0;i<a.K;++i){P(B b 35 a[i]){w.2Q(a[i][b]);3b.3t(a[i][b])}}}R{w.2Q(a);3b.3t(a)}}2F(e){}};w.4l=D(g,h,i){B j=18 h.6f=="1b"?h.4v:h.4s;L(h.5R).O({2u:w.A.1n,M:w,1Y:n,4c:w.A.4H,V:h.V,X:g,52:h.1d,6m:h.2e,6n:h.2D,4b:Q,Y:Q,1K:L.b8(L(h.5y),L("."+j)),1P:w.A.1P,43:N,2g:N,3w:D(a,b,c,d,e){h.1F.6y(a,b,c,d,e)},1i:D(a,b,c,d,e,f){h.1F.5e(i,a,b,c,d,e,f)},1m:D(){h.1F.5e(i)}})};w.5Q=D(a){B b=1a 2G("\\\\b"+w.A.2s+".*\\\\b");B c=b.2H(a.2v);C(!c)J w.2L(a);c=c[0].1T(" ")[0];B d=c.W(w.A.2s,"");d=d.W(/^\\s*|\\s*$/g,"");d=d.19();J d};w.2L=D(a){B b=1a 2G("\\\\b"+w.A.1E+".*\\\\b");B c=b.2H(a.2v);C(!c)J;c=c[0].1T(" ")[0];B d=c.W(w.A.1E,"");d=d.W(/^\\s*|\\s*$/g,"");d=d.19();C(d=="1u-cn")d="1u-3Y";R C(d=="1u-b3")d="1u-3W";J d};w.6y=D(a,b,c,d,e){w.3e(N);C(18 w.A.2B=="D"||18 w.A.2B=="1z")C(w.A.2B.1y)w.A.2B(a,b,c,d,e,n)};w.5e=D(a,b,c,d,e,f,g){w.3p(w.A);C(!a){C(w.A.1i)w.1r.1w(w.A.2q);C(w.2L(w.1r.28(0))==f)w.3e(Q)}R C(w.A.1i&&w.A.3k)w.1r.1w(w.A.2q);C(18 w.A.1L=="D"||18 w.A.1L=="1z")C(w.A.1L.1y)w.A.1L(b,c,d,e,f,g,a,n)};w.6R=D(a){w.1r=L(a);w.3p(w.A);C(w.A.2k)w.1r.1w(w.A.3v);w.3e(N)};w.3e=D(a){C(a)w.2m.3a("."+w.A.3h).b2(6N);R w.2m.3a("."+w.A.3h).b0(aZ)};w.3p=D(a){w.2t.6U(a.3v);w.2t.6U(a.2q)};w.68=D(){B a=[];B b;B c;B d;P(B i=0;i<w.A.1l.K;i++){c="";d="";C(w.A.2j)c=w.6Y(w.A.1l[i]);C(w.A.1I)d=w.70(w.A.1l[i]);b=w.71(w.A.1l[i],c,d);a.1e(b)}J w.72(a)};w.72=D(a){B b=w.A.5u;b=b.W("{{ 6p }}",w.A.4A);b=b.W("{{ 3V }}",a.3E(w.A.53));C(w.A.2w)b+=w.74();J b};w.74=D(){B a=w.A.4D;a=a.W("{{ 7Y }}",w.A.3h);a=a.W("{{ 87 }}",w.A.3f);a=a.W("{{ 7I }}",w.A.4G);J a};w.71=D(a,b,c){B d=w.A.4F;B e=w.3R(a);B f;d=d.W(/\\{\\{ 2Y \\}\\}/1J,e);f=w.A.1E+w.5A(a,Q);C(a.1T("1j").K>1)f+=" "+w.A.2s+a;d=d.W(/\\{\\{ 5K \\}\\}/1J,f);d=d.W("{{ 3V }}",b+c);J d};w.70=D(a){B b=w.A.5C;B c=w.A.2N?w.5A(a,N):w.3R(a);b=b.W(/\\{\\{ 2Y \\}\\}/1J,c);J b};w.6Y=D(a){B b=w.A.4z;B c=w.3R(a).W(" ","1j");b=b.W(/\\{\\{ 2P \\}\\}/1J,w.A.4E+c+".aX");b=b.W(/\\{\\{ 2Y \\}\\}/1J,c);J b};w.5A=D(a,b){B c=a.1T("1j");B d;C(b)d=c[0];R d=c.K>1?c[1]:c[0];J b?d.19():d.1O()};w.3R=D(a){B b="";P(B i 35 w.A.3i)C(w.A.3i[i].19()==a.19())b=i;J w.7e(b.W("1j"," "))};w.1s=D(a){J a===N||a===Q};w.7e=D(d){B e=d.19();J e.W(/(^|\\s)([a-z])/g,D(a,b,c){J b?b+c.1O():c.1O()})};w.88(k,l)};(D($){D 5D(){}5D.1v={7i:D(a,o){w.5H=[];w.34=[];w.U=o;w.1A=a;w.n=-1;C(o.36===Q)o.36=2;J w.7C()},3Q:D(a){J a.2h===3&&a.38.2C(/\\S/)!==1g&&a.2p.19()!="5S"},5T:D(a){J a.2h===1&&a.2p.19()=="2J"&&a.1U.19()!="5U"&&a.1U.19()!="5V"},5W:D(a){J a.2h===1&&a.2p.19()=="2J"&&(a.1U.19()=="5U"||a.1U.19()=="5V")},3P:D(a){J a.2h===1&&a.2p.19()=="5S"},4x:D(a){B b=1G[1]||1g;C(!b)J a==1g||a.K==0;R J a==b},2g:D(a){J w!=7X?a.W(/^\\s*|\\s*$/g,""):1g},3M:D(a){B b=1G[1]||[];P(B i=0;i<a.K;i++){C(({86:1,aR:1,aP:1,aO:1,aN:1})[a[i].2p])2y;C(a[i].aM()&&!w.3P(a[i]))w.3M(a[i].89,b);C(w.3Q(a[i])){C(!w.4x(w.2g(a[i].38))&&w.2g(a[i].38)!=".")b.1e(a[i])}R C(w.5T(a[i])||w.5W(a[i])||w.3P(a[i])){C(!w.4x(w.2g(a[i].3O))&&w.2g(a[i].3O)!=".")b.1e(a[i])}}J b},8k:D(a){B b;3J(a.2h){1M 3:{b=a.38;1f}1M 1:{b=a.3O;1f}3C:{b=1g;1f}}J b},7C:D(){B a;B b=[];B c;B d;B e;P(B i=0;i<w.1A.K;i++){C(w.5T(w.1A[i])||w.3P(w.1A[i])||w.5W(w.1A[i]))e=w.3M([w.1A[i]]);R e=w.3M(w.1A[i].89);d=w.61(e);b=b.62(d)}P(B i=0;i<b.K;i++){w.34.1e(b[i]);w.5H.1e(w.8k(b[i]))}a=w.1A.aK(w.34,"31");w.U.1i.1y(a,a,w.5H);J a},67:D(a){B b=a;3J(b.2h){1M 3:{3T(b){C(b.69)J b.69;b=b.aJ}1f}1M 1:{J b;1f}3C:{1f}}},61:D(a){B b=w.U.1K;C(b.K==0)J a;B c=[];B d;B e;B f;P(B i=0;i<a.K;i++){d=w.67(a[i]);e=b.K==b.1K(d).K;f=L(d).1K(b.2f("*"));C(e&&f.K>0)c.1e(a[i])}J c}};B g={1K:"",36:N,1k:D(){},1i:D(){},aG:N,6c:Q,6d:Q,3z:N,3y:Q,3X:Q};$.1x.31=D(o){o=$.1h({},g,$.1x.31.1t,o);J 1a 5D().7i(w,o)};$.1x.31.1t=g})(L);(D($){D $D(){}B n=Q,1X=N,1b,W="".W,1R=2a,4Q=ay,40=au,4U,1N,4V,41={},2k,4X=[],at="1C://O.ao.am/",1t={4Z:"",V:"",X:"",3w:$D,1m:$D,1k:$D,1i:$D,50:$D,al:0,51:n,43:n,3X:n,42:ak,6d:n,6c:1X,W:n,ai:n,Y:n,2r:1X,3y:n,1K:"",3z:n,36:1X,4b:1X,6G:n,2g:Q,ag:N};D 6I(){$.O.1N=1N={af:"ar",ae:"bg",ad:"ca",ac:"1u-3Y",ab:"1u-3W",aa:"cs",a9:"66",a8:"a6",a5:"4S",a3:"a2",9Z:"9Y",9W:"6g",9U:"6e",9R:"9Q",9P:"9O",9N:"77",9H:"9F",9E:"9D",9C:"1n",9B:"7W",9A:"8l",9z:"9y",9x:"9u",9t:"9s",9p:"9o",9m:"9l",9j:"2R",9i:"9h",9g:"9f",9e:"9d",9c:"9b",98:"6h",95:"94",93:"91",90:"5z",8X:"8W",8U:"8T"};4V=$.O.5X;$.1k(1N,D(l,a){41[a.1O()]=l});$.O.7H=n;L(1D).2x(D(){B a;3T((a=4X.7J()))a()})}D 4i(c,d){B e={};$.1k(c,D(a,b){C(d(b,a)===n)e[a]=b});J e}D 2M(a,b,c){J D(){J a.4k(b===n?1G[0]:b,c||1G)}}D 5E(e){J e!==1b}D 5F(d,f,g){B h,5G={},3g=$.7P(d,5E);$.1k(f,D(1j,b){B c=$.7P(b[0],D(e,i){J 5E(3g[i])&&3g[i].8S===e}).K;C(c===3g.K&&c===b[0].K&&(h=n)){$.1k(b[1],D(i,a){5G[a]=3g[i]});J 1X}});C(!h)8R g;J 5G}D 5I(a,b){B c=5F(a,$.O.7T,"L.O: 1S 1G"),o=c.U||{};5J c.U;o=$.1h({},1t,b,$.1h(o,c));C(o.6G)o.4b=n;C(o.4b)o.Y=n;C(o.36===n)o.36=2;J o}D T(){w.1h($.O);5J w.1t;5J w.1x}T.1v={8Q:"1.4.7",7Z:D(t,o){B c=w.8P=18 t==="3D",81=0,2E;$.1k(["51","3X","43"],D(i,a){B b=$.O[a];C(o[a])t=c?b(t):$.82(t,b)});w.U=o;w.V=o.V||"";w.X=o.X||"";w.4Z=o.4Z||"";w.5P=t;w.84="";w.2d=[];w.i=0;w.3s=1X;w.34=o.2c;w.2l=1g;w.44(o,t);w.2A=-1;o.3w.1y(w,t,o.V,o.X,o);w.8a()},44:D(a,b){B c=a.2c;B d;w.1o=[];P(B i=0;i<c.K;i++){d=w.8c(b[i]);C(d==""||w.8d(d))2y;w.1o.1e({1z:c[i],8e:b[i],8f:N,1Q:[],27:w.8i(a,b[i])})}},8d:D(a){C(w.8j(a))J Q;C(a.K>1)J N;B b=[".","!","?",";",":"];P(B i=0;i<b.K;i++)C(a==b[i])J Q;J N},8j:D(a){J a.2C(/^.?[\\d\\.\\,\\-\\+]*$/)?Q:N},8i:D(a,b){C(a.V==a.X)J[b];B c=a.V+"1j"+a.X;B d=3G(b);B e="<1f>";B f=w.4w(d,a.1Y[c].42,e,0).1T(e);B g;B h=0;B j;B k=[];B l=0;C(f.K>1){j=f[0];3T(h<d.K){C(!w.8m(j,d.2E(h,d.K)))j=w.8n(j);k.1e(j);h+=j.K;j=w.4w(d.2E(h,d.K),a.1Y[c].42,e,0).1T(e)[0];l++}}R k=f;P(B i=0;i<k.K;i++)k[i]=5Y(k[i]);J k},8n:D(a){B b=5Y(a);B c=[".","!","?",";",":"];C(w.8p())c=c.62(["：","；","。"]);B d=N;B e;P(B i=0;i<c.K;i++){e=b.8s(c[i]);C(e==-1)2y;C(d===N)d=e+c[i].K;C(e>d)d=e+c[i].K}J d===N?a:3G(b.2E(0,d))},8p:D(){C(w.U.V=="1u-3Y"||w.U.V=="1u-3W")J Q;J N},8m:D(a,b){C(w==7X)J 1g;J a.K>=b.K&&a.5Z(a.K-b.K)==b},8c:D(a){B b;b=a.W(/[\\n\\r\\t\\f\\8t\\8u\\8v\\8w\\8x\\8y\\8z\\8A\\8B\\8C\\8D\\8E\\8F\\8G\\8H\\8I\\8J]+/1J," ");b=b.W(/^\\s+|\\s+$/1J,"");J b},8b:D(){C(w.3s)J;B o=w.U,i=w.84.K,81,8L,8M,8N;B a=w;C(w.1o.K-1==w.2A)w.4t();R w.80()},80:D(){B a=w.U.1P||5;P(B i=0;i<a;i++)w.2b()},5i:D(){J w.5L},7R:D(){C(!w.2l){w.2l=[];P(B i=0;i<w.1o.K;i++){P(B j=0;j<w.1o[i].27.K;j++)w.2l.1e({"25":w.1o[i].27[j],"3a":w.1o[i],"4g":j})}}J w.2l},7F:D(){B a=w.U.2u+"6t";P(B i 35 1d){C(i==a&&w.U.6n)2y;C(i.8V(w.U.2u)===0)1d.6K(i)}},7E:D(a,b,c,d){C(!w.U.52||18 1d=="1b")J N;B e=w.U.2u+"7D";B f=1d.4r(e);B g=1a 1Z();C(!f||1a 1Z(f)<g){w.7F();g.8Y(g.8Z()+w.U.6m);1d.5O(e,g)}B h=w.U.2u+"1j"+c+"1j"+d+"1j"+L.5x(a);1d.5O(h,b)},7B:D(a,b,c){C(!w.U.52||18 1d=="1b")J N;B d=w.U.2u+"7D";B e=1d.4r(d);C(!e||1a 1Z(e)<1a 1Z())J N;B f=w.U.2u+"1j"+b+"1j"+c+"1j"+L.5x(a);B g=1d.4r(f);J g!=1g?g:N},2b:D(){w.2A++;B a=w.7R();C(w.2A>=a.K)J;w.5L=Q;B b=[];B c=[];B d;B e;B f=0;B g=w.2A;B h=w.V+"1j"+w.X;P(B i=g;i<a.K;i++){C(d=w.7B(a[i].25,w.V,w.X)){c.1e({4g:i,2d:d});2y}C(w.V!=w.X){C(b.K>=w.U.1Y[h].92)1f;C(f+a[i].25.K>w.U.1Y[h].42)1f}b.1e(a[i].25);f+=a[i].25.K}e=b.K+c.K;C(e==0)J;w.2A=i-1;w.7A(b,w,g,c,e)},7A:D(c,d,e,f,g){C(w.V==w.X||f.K==g){d.5w(c,e,f,g);d.2b();J}B h=1a L.M.1B();h.7y(N);h.2S=D(a){B b=L.M.4I.4J(a);C(b.1m==="4K 96"||b.1m==="4K 8h"){C(!d.U.M.4y()){d.2o(b.1m);d.U.M.4j(d.U.M,d.X);J}d.2o(b.1m);d.U.M.3p(d.U.M.A);d.U.M.2I();J}d.5w(b,e,f,g);d.2b()};B j=[];P(B i=0;i<c.K;i++)j.1e(3G(c[i]));B k=w.V+"1j"+w.X;h.1q("97",j);h.1q("4N",w.U.1Y[k].4N);h.1q("f",w.V);h.1q("ct",w.7x());h.1q("t",w.X);h.1q("99",3G(w.U.1Y[k].6a));h.1q("cr",w.U.1Y[k].9a);h.1q("7w",w.U.1Y[k].7w);h.4O(d.U.4c)},7v:D(){P(B i=0;i<w.1o.K;i++){C(w.1o[i].27.K>w.1o[i].1Q.K)J N;P(B j=0;j<w.1o[i].27.K;j++)C(18 w.1o[i].1Q[j]=="1b"||w.1o[i].1Q[j]=="")J N}w.5L=N;J Q},5w:D(a,b,c,d){B e=a.1m;B f;B g;C(e){w.2o(e);f=N}R f=a;w.7u(f,b,c,d);C(w.7v())w.4t()},7t:D(a,b){B c=w.2l[b];c.3a.1Q[c.4g]=a!==N?a:c.25;J c.3a},7u:D(a,b,c,d){B e;B f;B g;B h;B j=0;P(B i=0;i<d;i++){f=i+b;C(g=w.7s(f,c))h=g;R{h=a!==N?a[j]:N;j++}e=w.7t(h,f);w.7E(w.2l[f].25,h,w.V,w.X);w.7r(e)}},7r:D(a){C(a.27.K>a.1Q.K)J;P(B i=0;i<a.27.K;i++)C(18 a.1Q[i]=="1b")J;P(B i=0;i<a.27.K;i++)C(a.1Q[i]=="")a.1Q[i]=a.27[i];B b=a.1Q.3E("");w.5v(a.1z,b);a.8f=Q;w.7p(a.1z,w.X,b,w.V,a.8e,w.U);w.2r(a.1z,w.X,w.U)},7s:D(a,b){P(B i=0;i<b.K;i++)C(b[i].4g==a)J b[i].2d;J N},7x:D(){C(!w.4f)w.4f=0;w.4f++;J 2a(w.4f)},2Q:D(a){B b=["1S 2X 2Z","1S 3m 4d 7N","1S 3m 4d 7O","1S 7S 2X 2Z","7U 1K 7V"];B c;P(B i=0;i<b.K;i++){c=1a 2G(b[i]);C(c.2H(a)){4P(a);J Q}}},2o:D(a){2z{C(a 4h 2O){P(B i=0;i<a.K;++i){P(B b 35 a[i]){w.2Q(a[i][b]);3b.3t(a[i][b])}}}R{w.2Q(a);3b.3t(a)}}2F(e){}},4t:D(){w.U.1i.1y(w,w.2d,w.5P,!w.V&&w.9k||w.V,w.X,w.U)},4e:D(){C(w.3s)J w;w.3s=n;w.U.1m.1y(w,{7m:"3s"});J w}};$.O=D(t,a){C(t==1b)J L.M.4m=1a T();C($.9n(t))J $.O.2x(t,a);B b=1a T();L.M.4m=b;B c=[].3n.1y(1G,0);c.7J();J $.O.2x(2M(b.7Z,b,[t,5I(c,$.O.1t)]),1X,b)};$.O.1x=$.O.1v=T.1v;$.O.1x.1h=$.O.1h=$.1h;$.O.1h({7k:2M,9q:4i,9r:5F,7j:5I,5r:1t,1t:$.1h({},1t),5q:D(t){J t.9v(0).1O()+t.2E(1).19()},9w:D(a,b){B c="<1f>";B d=w.4w(a,b,c,0).1T(c);B e=[]},4w:D(a,m,b,c){B i,j,l,s,r;B v=a.W(/%20/1J," ");C(m<1)J a;P(i=-1,l=(r=v.1T("\\n")).K;++i<l;r[i]+=s)P(s=r[i],r[i]="";s.K>m;r[i]+=s.3n(0,j)+((s=s.3n(j)).K?b:""))j=c==2||(j=s.3n(0,m+1).2C(/\\S*(\\s)?$/))[1]?m:j.2J.K-j[0].K||c==1&&m||j.2J.K+(j=s.3n(m).2C(/^\\S*/)).2J.K;J r.3E("\\n").W(/\\s/1J,"%20")},4M:D(a,b){C(a==1b||(b==1b&&!a))J 1N;B c={},5o=18 a,1l=b?$.O.4M(a):1N,2T=(5o==="1z"||5o==="D")?a:b;C(2T)C(2T.1y)c=4i(1l,2T);R P(B i=0,K=2T.K,2U;i<K;i++){2U=$.O.5l(2T[i]);C(1l[2U]!=1b)c[2U]=1l[2U]}R c=4i(1N,4U.5k);J c},5l:D(a,b){B u=a.1O();B l=41[u]||(1N[u]?u:1b)||41[($.O.5j[a.19()]||"").1O()];J l==1b?1b:b==="9G"?l.19():b==="5q"?$.O.5q(l):l},5X:D(a){J 1N[a]||1N[$.O.5l(a)]||$.O.5j[a.19()]},5k:D(l){J 4U.5k(4V(l))},5j:{"2R":"2R-78","2R-br":"2R-78","9I":"77","9J":"9K","1u-9L":"1u-3Y","1u-9M":"1u-3W"},76:D(){2k=n;6I();J $.O},2x:D(a,b,c){4X.1e(a);$.O.76();J c||$.O},7H:1X,7T:[[[],[]],[[1R,1R,40],["V","X","U"]],[[1R,40],["X","U"]],[[40],["U"]],[[1R,1R],["V","X"]],[[1R],["X"]],[[1R,1R,4Q],["V","X","1i"]],[[1R,4Q],["X","1i"]]],3X:2M(W,n,[/<75[^>]*>([\\s\\S]*?)<\\/75>/1J,""]),43:2M(W,n,[/\\s\\s+/g," "]),51:2M(W,n,[/<![ \\r\\n\\t]*(--([^\\-]|[\\r\\n]|-[^\\-])*--[ \\r\\n\\t]*)>/g,""])})})(L);(D($){B f=Q;B g={25:f,5U:f,5V:f};D 4a(a,o){B b=a.2p.1O();B c;C(b===\'73\'&&18 $.5h(a,\'1U\')=="1b")c="25";R c=b===\'73\'&&$.5h(a,\'1U\').19();o=o||{3z:f,3y:f};J 18 o.3y==="3D"?o.3y:o.3z&&(b===\'9S\'||c==="9T")?"7o":o.3z&&g[c]?"$5g":b==="9V"?"$5g":"$5b"}$.O.1x.8a=D(){B o=w.U,X=o.X,4e;B c=[];P(B i=0;i<w.1o.K;i++)c.1e(w.1o[i].1z);L(c).1k($.O.7k(D(i,a){w.i=i;B b=$.O.5f(a,X,o);C(!b)J!(4e=f);w.2d.1e(b);o.1k.1y(w,i,a,b,w.5P[i],w.V,X,o)},w));!4e?w.4t():w.8b()};$.O.1h({9X:4a,1k:D(i,a,t,s,b,c,o){C(!a)J;$.O.W(a,t,c,o);$.O.2r(a,c,o)},W:D(e,t,a,o){w.5v(e,t)},5f:D(e,a,o){B b=e[0]||e,Y=L.M.Y(b,"2d");J Y&&Y[a]&&Y[a][4a(b,o)]},7p:D(e,a,t,b,s,o){C(o&&!o.Y)J;B c=e[0]||e,1U=4a(c,o),Y=L.M.Y(c,"2d");Y=Y||L.M.Y(c,"2d",{});C(18 Y=="1b")J;(Y[b]=Y[b]||{})[1U]=s;(Y[a]=Y[a]||{})[1U]=t},5v:D(a,b){3J(a.2h){1M 3:{a.38=b;1f}1M 1:{a.3O=b;1f}3C:{1f}}},2r:D(e,a,o){C(!o||o.2r)e.5h((!o||o.2r===f)?"2U":o.2r,a)}});$.1x.O=D(a,b,c){B o=$.O.7j(1G,$.1x.O.1t),6Z=$.1h({},$.O.5r,$.1x.O.1t,o,{1i:D(e,t){$.O(D(){B c=$.O.5X(o.V);e.1k(D(i,a){B b=$.O.5f(a,c,o);C(!b)J Q;t[i]=b});B d=o.1k;D 3L(a){J D(){[].a0.1y(1G,w.34);a.4k(w,1G)}}o.2c=e;o.3w=3L(o.3w);o.50=3L(o.50);o.1i=3L(o.1i);o.1k=D(i){B a=1G;C(1G.K!==7){[].a1.1y(a,1,0,w.34[i])}w.1k.4k(w,a);d.4k(w,a)};$.O(t,o)})},1k:D(){}});C(w.31){J w.31(6Z)}o.2c=w;$.O($.82(w,D(e){J $(e).5b()||$(e).5g()}),o);J w};$.1x.O.1t=$.1h({},$.O.5r)})(L);L.3c=D(a,b,c){C(18 b!=\'1b\'){c=c||{};C(b===1g){b=\'\';c.1p=-1}B d=\'\';C(c.1p&&(18 c.1p==\'6X\'||c.1p.6W)){B e;C(18 c.1p==\'6X\'){e=1a 1Z();e.a4(e.6V()+(c.1p*24*60*60*a7))}R{e=c.1p}d=\'; 1p=\'+e.6W()}B f=c.2K?\'; 2K=\'+(c.2K):\'\';B g=c.5d?\'; 5d=\'+(c.5d):\'\';B h=c.6T?\'; 6T\':\'\';1D.1W=[a,\'=\',3G(b),d,f,g,h].3E(\'\')}R{B j=1g;C(1D.1W&&1D.1W!=\'\'){B k=1D.1W.1T(\';\');P(B i=0;i<k.K;i++){B l=L.2g(k[i]);C(l.5Z(0,a.K+1)==(a+\'=\')){j=5Y(l.5Z(a.K+1));1f}}}J j}};L.M={};L.M.1H={2c:[],Y:{}};L.M.48=D(a){P(B i=0;i<L.M.1H.2c.K;i++)C(a==L.M.1H.2c[i])J i;J N};L.M.3Q=D(a){J a.2h===3&&a.38.2C(/\\S/)!==1g&&a.2p.19()!="5S"};L.M.6Q=D(a,b,c){C(!L.M.1H.Y[a])J c;C(!L.M.1H.Y[a][b])J c;J L.M.1H.Y[a][b]};L.M.6P=D(a,b,c){C(!L.M.1H.Y[a])L.M.1H.Y[a]={};L.M.1H.Y[a][b]=c};L.M.Y=D(a,b,c,d){C(!L.M.3Q(a))J 18 c!="1b"?L.Y(a,b,c):L.Y(a,b);C(18 c!="1b"){B e=L.M.48(a);C(e===N){L.M.1H.2c.1e(a);e=L.M.48(a)}L.M.6P(e,b,c);J c}R{B e=L.M.48(a);C(e===N)J d;J L.M.6Q(e,b)}};L.M.3B=[];L.M.5B={};L.M.28=D(a){J L.M.5B[a]};L.M.2x=L.O.2x;L.M.1B=D(){w.1C=N;w.2S;w.47;w.46;w.1L;w.1m=N;w.59="";w.58="45";w.26="";w.54=Q;w.4c;w.ah;w.7m;w.3u=N;w.aj=Q;w.6D()};L.M.1B.1v.6A=D(){B a=N;C(18 4Y!=\'1b\'){2z{a=1a 4Y("an.6w")}2F(e){2z{a=1a 4Y("3m.6w")}2F(E){a=N}}}R C(6v){2z{a=1a 6v()}2F(e){a=N}}J a};L.M.1B.1v.aq=D(a){w.3u=a};L.M.1B.1v.as=D(){J w.3u};L.M.1B.1v.7y=D(a){w.54=a};L.M.1B.1v.4O=D(c,d,e,f,g){C(!w.1C||!c)J;w.4c=c;w.3u=Q;C(d)w.2S=d;C(e)w.47=e;C(f)w.46=f;C(g)w.1L=g;B h=w;C(w.54)w.1q("u",2a(1a 1Z().6V()));3J(w.58.1O()){1M"45":w.1C.6u("45",c,Q);1f;1M"4T":c+="&"+w.26;w.1C.6u("4T",c,Q);1f;3C:J}C(w.46)w.46();w.1C.av=D(){C(!h)J;B a=h.1C;C(a.aw==4){h.3u=N;C(a.ax==6N){B b="";C(a.4R)b=a.4R;C(h.2S)h.2S(b)}R{h.1m=Q;h.59=a.4R;C(h.47)h.47(h.59)}C(h.1L)h.1L()}};3J(w.58.1O()){1M"45":w.1C.8r("aA-aB","aC/x-aD-aE-aF");w.1C.6b(w.26);1f;1M"4T":w.1C.6b(1g);1f;3C:J}};L.M.1B.1v.aH=D(){w.26=""};L.M.1B.1v.1q=D(a,b){w.26+=w.26!=""?"&":"";C(18 b=="3D")w.26+=a+"="+b;R C(b 4h 2O){B c=0;P(B i=0;i<b.K;i++){C(18 b[i]!="3D")2y;C(c>0)w.26+="&";w.26+=a+"[]"+"="+b[i];c++}}};L.M.1B.1v.6D=D(){w.1C=w.6A()};L.M.4I={4J:D(a){B b=aI("(("+a+"))");J b}};(D($){B l=D(a,b){J(a<<b)|(a>>>(32-b))};B m=D(a,b){B c,3U,33,37,2n;33=(a&4B);37=(b&4B);c=(a&49);3U=(b&49);2n=(a&83)+(b&83);C(c&3U)J(2n^4B^33^37);C(c|3U){C(2n&49)J(2n^aQ^33^37);R J(2n^49^33^37)}R{J(2n^33^37)}};B F=D(x,y,z){J(x&y)|((~x)&z)};B G=D(x,y,z){J(x&z)|(y&(~z))};B H=D(x,y,z){J(x^y^z)};B I=D(x,y,z){J(y^(x|(~z)))};B o=D(a,b,c,d,x,s,e){a=m(a,m(m(F(b,c,d),x),e));J m(l(a,s),b)};B p=D(a,b,c,d,x,s,e){a=m(a,m(m(G(b,c,d),x),e));J m(l(a,s),b)};B q=D(a,b,c,d,x,s,e){a=m(a,m(m(H(b,c,d),x),e));J m(l(a,s),b)};B r=D(a,b,c,d,x,s,e){a=m(a,m(m(I(b,c,d),x),e));J m(l(a,s),b)};B t=D(a){B b;B c=a.K;B d=c+8;B e=(d-(d%64))/64;B f=(e+1)*16;B g=2O(f-1);B h=0;B i=0;3T(i<c){b=(i-(i%4))/4;h=(i%4)*8;g[b]=(g[b]|(a.6O(i)<<h));i++}b=(i-(i%4))/4;h=(i%4)*8;g[b]=g[b]|(b1<<h);g[f-2]=c<<3;g[f-1]=c>>>29;J g};B u=D(a){B b="",3S="",5n,39;P(39=0;39<=3;39++){5n=(a>>>(39*8))&b4;3S="0"+5n.6J(16);b=b+3S.2E(3S.K-2,2)}J b};B v=D(a){a=a.W(/\\b5\\6B/g,"\\6B");B b="";P(B n=0;n<a.K;n++){B c=a.6O(n);C(c<3Z){b+=2a.2W(c)}R C((c>b9)&&(c<ba)){b+=2a.2W((c>>6)|bb);b+=2a.2W((c&63)|3Z)}R{b+=2a.2W((c>>12)|bf);b+=2a.2W(((c>>6)&63)|3Z);b+=2a.2W((c&63)|3Z)}}J b};$.1h({5x:D(e){B x=2O();B k,5N,5p,5m,57,a,b,c,d;B f=7,3K=12,3I=17,3H=22;B g=5,3A=9,3x=14,3r=20;B h=4,3q=11,3d=16,3F=23;B i=6,3o=10,3l=15,3j=21;e=v(e);x=t(e);a=bA;b=bB;c=bC;d=bD;P(k=0;k<x.K;k+=16){5N=a;5p=b;5m=c;57=d;a=o(a,b,c,d,x[k+0],f,bE);d=o(d,a,b,c,x[k+1],3K,bF);c=o(c,d,a,b,x[k+2],3I,bG);b=o(b,c,d,a,x[k+3],3H,bH);a=o(a,b,c,d,x[k+4],f,bI);d=o(d,a,b,c,x[k+5],3K,bJ);c=o(c,d,a,b,x[k+6],3I,bK);b=o(b,c,d,a,x[k+7],3H,bL);a=o(a,b,c,d,x[k+8],f,bM);d=o(d,a,b,c,x[k+9],3K,bN);c=o(c,d,a,b,x[k+10],3I,bO);b=o(b,c,d,a,x[k+11],3H,bP);a=o(a,b,c,d,x[k+12],f,bQ);d=o(d,a,b,c,x[k+13],3K,bS);c=o(c,d,a,b,x[k+14],3I,bT);b=o(b,c,d,a,x[k+15],3H,bU);a=p(a,b,c,d,x[k+1],g,bV);d=p(d,a,b,c,x[k+6],3A,bW);c=p(c,d,a,b,x[k+11],3x,bX);b=p(b,c,d,a,x[k+0],3r,bY);a=p(a,b,c,d,x[k+5],g,bZ);d=p(d,a,b,c,x[k+10],3A,c0);c=p(c,d,a,b,x[k+15],3x,c1);b=p(b,c,d,a,x[k+4],3r,c2);a=p(a,b,c,d,x[k+9],g,c3);d=p(d,a,b,c,x[k+14],3A,c4);c=p(c,d,a,b,x[k+3],3x,c5);b=p(b,c,d,a,x[k+8],3r,c6);a=p(a,b,c,d,x[k+13],g,c7);d=p(d,a,b,c,x[k+2],3A,c8);c=p(c,d,a,b,x[k+7],3x,c9);b=p(b,c,d,a,x[k+12],3r,cb);a=q(a,b,c,d,x[k+5],h,cc);d=q(d,a,b,c,x[k+8],3q,cd);c=q(c,d,a,b,x[k+11],3d,ce);b=q(b,c,d,a,x[k+14],3F,cf);a=q(a,b,c,d,x[k+1],h,cg);d=q(d,a,b,c,x[k+4],3q,ch);c=q(c,d,a,b,x[k+7],3d,ci);b=q(b,c,d,a,x[k+10],3F,cj);a=q(a,b,c,d,x[k+13],h,ck);d=q(d,a,b,c,x[k+0],3q,cl);c=q(c,d,a,b,x[k+3],3d,cm);b=q(b,c,d,a,x[k+6],3F,co);a=q(a,b,c,d,x[k+9],h,cp);d=q(d,a,b,c,x[k+12],3q,cq);c=q(c,d,a,b,x[k+15],3d,cu);b=q(b,c,d,a,x[k+2],3F,cv);a=r(a,b,c,d,x[k+0],i,cw);d=r(d,a,b,c,x[k+7],3o,cx);c=r(c,d,a,b,x[k+14],3l,cy);b=r(b,c,d,a,x[k+5],3j,cz);a=r(a,b,c,d,x[k+12],i,cA);d=r(d,a,b,c,x[k+3],3o,cB);c=r(c,d,a,b,x[k+10],3l,cC);b=r(b,c,d,a,x[k+1],3j,cD);a=r(a,b,c,d,x[k+8],i,cE);d=r(d,a,b,c,x[k+15],3o,cF);c=r(c,d,a,b,x[k+6],3l,cG);b=r(b,c,d,a,x[k+13],3j,cH);a=r(a,b,c,d,x[k+4],i,cI);d=r(d,a,b,c,x[k+11],3o,cJ);c=r(c,d,a,b,x[k+2],3l,cK);b=r(b,c,d,a,x[k+9],3j,cL);a=m(a,5N);b=m(b,5p);c=m(c,5m);d=m(d,57)}B j=u(a)+u(b)+u(c)+u(d);J j.19()}})})(L);',62,792,'||||||||||||||||||||||||||||||||this||||_options|var|if|function||||||return|length|jQuery|translator|false|translate|for|true|else|||options|from|replace|to|data||||||||||typeof|toLowerCase|new|undefined|_container|localStorage|push|break|null|extend|complete|_|each|languages|error|id|_elements|expires|AddParam|_last_selected|_is_bool|defaults|zh|prototype|addClass|fn|call|object|jquery|Ajax|http|document|languageSelectorClass|_owner|arguments|_data|names|gi|not|onComplete|case|GLL|toUpperCase|requests|translated_text|Str|Invalid|split|type|class|cookie|False|auth|Date||||||text|params|to_translate|get||String|_translate|nodes|translation|localStorageExpires|find|trim|nodeType|div|flags|loading|_texts_to_translate|_restore|lResult|_display_errors|nodeName|completedClass|setLangAttr|customLanguageSelectorClass|_links|translator_id|className|restore|ready|continue|try|_i|onStart|match|clearLocalStorage|substr|catch|RegExp|exec|_do_restore|input|path|_extract_language|bind|shortNames|Array|src|_alert_error|pt|onSuccess|filterArg|lang|onInitialize|fromCharCode|API|name|key||nodesContainingText||lX8|elements|in|async|lY8|nodeValue|lCount|parent|console|translatorCookie|S33|_show_restore|restoreClass|args|restoreContainerClass|_languages|S44|autoSelect|S43|Microsoft|slice|S42|_clear_select|S32|S24|stopped|log|_processing|loadingClass|start|S23|subject|altAndVal|S22|ids|default|string|join|S34|encodeURIComponent|S14|S13|switch|S12|unshiftArgs|getTextNodes|_token_requests_count|value|isTextAreaNode|isTextNode|_gen_language_name|WordToHexValueTemp|while|lY4|content|TW|stripScripts|CN|128|Obj|inverseLanguages|limit|stripWhitespace|_initialize_elements|POST|onProcess|onFailure|findNode|0x40000000|getType|toggle|url|Client|stop|_ct_counter|ix|instanceof|filter|_get_token|apply|_do_translate|lastT|cookiePersistency|Number|appendChild|createElement|getItem|containerCustomClass|_complete|container|containerClass|_word_wrap|isEmpty|_enough_token_count|flagTemplate|subContainerClass|0x80000000|style|restoreTemplate|flagsFolder|linkTemplate|hiddenClass|actionsUrl|JSON|build|Token|flagsClass|getLanguages|action|Request|alert|Fn|responseText|en|GET|GL|toLangCode|namesClass|readyList|ActiveXObject|api_key|onTimeout|stripComments|local_storage|separator|unique|shortNamesClass||DD|method|errorMessage|flagsAndNamesClass|html|flagsAndShortNamesClass|domain|_on_complete|getData|val|attr|_is_translating|languageCodeMap|isTranslatable|toLanguage|CC|lByte|typeof_a|BB|capitalize|_defaults|td|left|linksContainerTemplate|_set_node_value|_process_translated|md5|excludeSelector|tr|_gen_language_short_name|translators|nameTemplate|Nct|isSet|validate|obj|textArray|getOpt|delete|language_selector_class|_translating|365|AA|setItem|source|_get_language_for_cookie|targetSelector|textarea|isInputNode|button|submit|isInputButtonNode|toLanguageCode|decodeURIComponent|substring||_remove_excluded|concat|||min|da|_get_text_node_parent|_gen_content|parentNode|token|send|returnAll|walk|de|location|fr|es|click|js|_initialize_options|table|local_storage_expires|local_storage_clear|language|sub_container_class|apiKey|clear|hidden|_cleared_on|open|XMLHttpRequest|XMLHTTP|custom|_on_start|href|getHTTPObject|x0a|php|initialize|body|disable|fromOriginal|javascript|loaded|toString|removeItem|customLanguages|title|200|charCodeAt|_set_data|_get_data|_select|_is_compatible|secure|removeClass|getTime|toUTCString|number|_gen_flag|ncto|_gen_name|_gen_link|_gen_content_container|INPUT|_gen_restore|script|load|iw|PT|short|_clear_stored_translations|_get_actions_url|Translator|_has_token|_capitalize|override|_inc_token_count|getId|init|_getOpt|_bind|the|message|_reset_token_count|alt|setData|and|_write_translated|_find_stored_translation|_set_translated_text|_write_translated_texts|_is_completed|nd|_ct|setUnique|5000px|_do_ms|_get_stored_translation|initializeElements|_expires|_set_stored_translation|_remove_stored_translations|_initialize_custom_languages|isReady|hidden_class|shift|_update_content|_sanitize_id|_preload_images|Id|Secret|grep|_on_initialize|_get_texts_to_translate|Google|overload|Resource|writable|it|window|restore_container_class|_init|_translate_begin|lastpos|map|0x3FFFFFFF|rawTranslation|Restore|SCRIPT|restore_class|_initialize|childNodes|_toggle|_process|_trim|_is_pointless|original|translated|_initialize_events|failed|_get_truncated_text|_is_numeric|_get_node_value|ja|_ends_with|_get_better_chunk|tbody|_is_language_x|span|setRequestHeader|lastIndexOf|x0b|xa0|u2000|u2001|u2002|u2003|u2004|u2005|u2006|u2007|u2008|u2009|u200a|u200b|u2028|u2029|u3000|selected|subst|divst|divcl|Disabling|isString|version|throw|constructor|vi|VIETNAMESE|indexOf|uk|UKRAINIAN|setDate|getDate|TURKISH|th|tr_limit|THAI|sv|SWEDISH|expired|tx|SPANISH|tk|crc|sl|SLOVENIAN|sk|SLOVAK|ru|RUSSIAN|ro|ROMANIAN|PORTUGUESE|detectedSourceLanguage|pl|POLISH|isFunction|no|NORWEGIAN|_filter|_validate|lt|LITHUANIAN|lv|charAt|truncate|LATVIAN|ko|KOREAN|JAPANESE|ITALIAN|INDONESIAN|hu|HUNGARIAN|hi|lowercase|HINDI|he|zlm|ms|hans|hant|HEBREW|ht|HAITIAN_CREOLE|el|GREEK|IMG|image|GERMAN|TEXTAREA|FRENCH|_getType|fi|FINNISH|unshift|splice|et|ESTONIAN|setTime|ENGLISH|nl|1000|DUTCH|DANISH|CZECH|CHINESE_TRADITIONAL|CHINESE_SIMPLIFIED|CATALAN|BULGARIAN|ARABIC|alwaysReplace|messageContainer|rebind|debug|1750|timeout|net|Msxml2|surstudio|hide|setProcessing||isProcessing|ms_u|Object|onreadystatechange|readyState|status|Function|No|Content|Type|application|www|form|urlencoded|comments|ClearParams|eval|previousSibling|pushStack|exposed|hasChildNodes|IFRAME|OBJECT|STYLE|0xC0000000|NOSCRIPT|The|must|placed|initialization|but|gif|config|100|slideUp|0x80|slideDown|tw|255|x0d|file|_cache_resource_not_writable|merge|127|2048|192|getSeconds|setSeconds||224||_should_translate|do|blur|me|dont|zA|top|absolute|position|process||procedures|getElementsByTagName|sub|completed|images|border|cellspacing|cellpadding|0x67452301|0xEFCDAB89|0x98BADCFE|0x10325476|0xD76AA478|0xE8C7B756|0x242070DB|0xC1BDCEEE|0xF57C0FAF|0x4787C62A|0xA8304613|0xFD469501|0x698098D8|0x8B44F7AF|0xFFFF5BB1|0x895CD7BE|0x6B901122|img|0xFD987193|0xA679438E|0x49B40821|0xF61E2562|0xC040B340|0x265E5A51|0xE9B6C7AA|0xD62F105D|0x2441453|0xD8A1E681|0xE7D3FBC8|0x21E1CDE6|0xC33707D6|0xF4D50D87|0x455A14ED|0xA9E3E905|0xFCEFA3F8|0x676F02D9||0x8D2A4C8A|0xFFFA3942|0x8771F681|0x6D9D6122|0xFDE5380C|0xA4BEEA44|0x4BDECFA9|0xF6BB4B60|0xBEBFBC70|0x289B7EC6|0xEAA127FA|0xD4EF3085||0x4881D05|0xD9D4D039|0xE6DB99E5||||0x1FA27CF8|0xC4AC5665|0xF4292244|0x432AFF97|0xAB9423A7|0xFC93A039|0x655B59C3|0x8F0CCC92|0xFFEFF47D|0x85845DD1|0x6FA87E4F|0xFE2CE6E0|0xA3014314|0x4E0811A1|0xF7537E82|0xBD3AF235|0x2AD7D2BB|0xEB86D391'.split('|'),0,{}))
	


 $(function() {
   
    $( "#search_o" ).autocomplete({
      source: 'autocomplete_oeuvre.php'
    });
  });
  
   $(function() {
   
    $( "#search_event" ).autocomplete({
      source: 'autocomplete_event.php'
    });
  });
  


$(function() {

    $( "#search_event1" ).autocomplete({

      source: 'autocomplete_event.php',
        
        focus: function( event, ui ) {
        
        
           $( "#search_event1" ).val( ui.item.value );
        
            return false;
        },
        select: function( event, ui ) {
           

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameArtiste").val();
            var nomEvent=$("#search_event1").val();
  // TypeEvent :selectTypeEvent ,

            $.post( 'restEvenments.php', {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : $( "#search_event1" ).val(),
                    nomArtiste : $("#nameArtiste").val()
                    
                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );


            return false;
        }
    });

  });

// $(function() {

//     $( "#nameArtiste" ).autocomplete({

//       source: 'autocomplete_art.php',
        
//         focus: function( event, ui ) {
        
        
//            $( "#nameArtiste" ).val( ui.item.value );
        
//             return false;
//         },
//         select: function( event, ui ) {

//             var selectVille = $("#ville option:selected").val();
//             var selectTypeEvent = $("#typeEvent option:selected").val();
//             var selectDu = $("#dpd3").val();
//             var selectAu = $("#dpd4").val();
//             var nameArtiste=$("#nameArtiste").val();
//             var nomEvent=$( "#search_event1" ).val();

// // alert(nameArtiste);
// // TypeEvent :selectTypeEvent ,

//             $.post( 'restEvenments.php',  {
//                     Du : selectDu,
//                     Au : selectAu,
//                     Ville :selectVille ,
//                     nomEvent : $( "#search_event1" ).val(),
//                     nomArtiste : $("#nameArtiste").val()
                    

//                 },
//                 function(data){  $( "#artist_right" ).html(data);


//                // if (Modernizr.touch) {
//         //     // show the close overlay button
//         //     $(".close-overlay").removeClass("hidden");
//         //     // handle the adding of hover class when clicked
//         //     $(".img").click(function(e){
//         //         if (!$(this).hasClass("hover")) {
//         //             $(this).addClass("hover");
//         //         }
//         //     });
//         //     // handle the closing of the overlay
//         //     $(".close-overlay").click(function(e){
//         //         e.preventDefault();
//         //         e.stopPropagation();
//         //         if ($(this).closest(".img").hasClass("hover")) {
//         //             $(this).closest(".img").removeClass("hover");
//         //         }
//         //     });
//         // } else {
//         //     // handle the mouseenter functionality
//         //     $(".img").mouseenter(function(){
//         //         $(this).addClass("hover");
//         //     })
//         //     // handle the mouseleave functionality
//         //     .mouseleave(function(){
//         //         $(this).removeClass("hover");
//         //     });
//         // }
//             }, 'html' );
//             return false;
//         }
//     });

//   });
 $(function(){

    $(".select3").change(function(){

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameA option:selected").val();
            var nameEvent= $( "#search_event1 option:selected" ).val();


		            // TypeEvent :selectTypeEvent ,
              $.post( 'restEvenments.php',  {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : nameEvent,
                    nomArtiste : nameArtiste
                   

                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );
        

                 });
   




 });
 
 
  $(function() {
      $( "#tags" ).autocomplete({
      source: 'autocomplete_art.php'
    });
  });



 $(function() {

    $( "#tags1" ).autocomplete({
      source: 'autocomplete_art.php',
        focus: function( event, ui ) {
            //$( "#tags" ).val( ui.item.label );
           $( "#tags1" ).val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            var selectTypeOeuvre = $("#SelTest option:selected").val();
            var selectstyle = $("#style option:selected").val();


            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : $("#tags1").val()

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
            scl=false;
            scroll = false;
            return false;
        }
    });

  });
//  $(function(){

// $(".select").change(function(){
//         scroll = true;
//         selectTypeOeuvre = $("#type option:selected").val();
//         selectstyle = $("#style2 option:selected").val();
//         nameart = $("#tags").val();

//         //alert(nameart);

//         if (  selectstyle=="" && selectTypeOeuvre=="All"  )
//         {
//             location.reload(); 
//         }
//         else
//         {
            
//             $.post( 'restArtistes.php',  {
//                 TypeOeuvre : selectTypeOeuvre,
//                 style : selectstyle,
//                 nameart : nameart

//             },
//             function(data){  $( "#artist_right" ).html(data);
//                 $(".oeuvres").on({
//                     mouseenter: function () {
//                         //$(this).addClass("hover");
//                         $( this ).children(".oeuvres_detail").addClass( "visible" );
//                     },
//                     mouseleave:function () {
//                         //$(this).removeClass("hover");
//                         $( this ).children(".oeuvres_detail").removeClass( "visible" );
//                     }
//                 });
//             }, 'html' );
//         };



//     });

 $(function() {
  $("#tags1").keyup(function() {
       
       var selectTypeOeuvre = $("#SelTest option:selected").val();
       var selectstyle = $("#style option:selected").val(); 
       var nameart = $("#tags1").val();
        
       //alert(nameart);
        if (nameart=="")
        {
            if (selectTypeOeuvre=="All" && selectstyle=="") {
                  scl=true;
                  
                } else{
                  scl=false;

                };
            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : nameart

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
          };
          
        });


 });
 
 
 $(function(){

$.widget( "custom.catcomplete", $.ui.autocomplete, {
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
that._renderItemData( ul, item );
});
}
});

});
$(function() {
$( "#search_a_o" ).catcomplete({
delay: 0,
source: "autocomplete_art_oeuvre.php"
});
});

$(function() {
   
    $( "#tags" ).autocomplete({
      source: 'autocomplete_art.php'
    });
  });

$(function() {

$( "#tags1" ).autocomplete({
  source: 'autocomplete_art.php',
    focus: function( event, ui ) {
        //$( "#tags" ).val( ui.item.label );
       $( "#tags1" ).val( ui.item.value );
        return false;
    },
    select: function( event, ui ) {
        var selectTypeOeuvre = $("#SelTest option:selected").val();
        var selectstyle = $("#style option:selected").val();
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();

        $.post( 'restOeuvres.php',  {
                TypeOeuvre : selectTypeOeuvre,
                style : selectstyle,
                prix1 : selectprix1,
                prix2 : selectprix2,
                format : selectformat,
                nameart : $("#tags1").val()

            },
            function(data){  $( "#artist_right" ).html(data);
                $(".oeuvres").on({
                    mouseenter: function () {
                        //$(this).addClass("hover");
                        $( this ).children(".oeuvres_detail").addClass( "visible" );
                    },
                    mouseleave:function () {
                        //$(this).removeClass("hover");
                        $( this ).children(".oeuvres_detail").removeClass( "visible" );
                    }
                });
            }, 'html' );


        return false;
    }
});

});


$(function() {

$("#tags1").keyup(function() {
  
        var selectTypeOeuvre = $("#SelTest option:selected").val();
        var selectstyle = $("#style option:selected").val();
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();
        var nameart = $("#tags1").val();

        if (nameart=="")
        {
            $.post( 'restOeuvres.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    prix1 : selectprix1,
                    prix2 : selectprix2,
                    format : selectformat,
                    nameart : nameart

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
};

     
});

});

$(function(){

$.widget( "custom.catcomplete", $.ui.autocomplete, {
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
that._renderItemData( ul, item );
});
}
});

});
$(function() {
$( "#search_all" ).catcomplete({
delay: 0,
source: "autocomplete_all.php"
});
});