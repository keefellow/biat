define(['pipAPI', 'https://keefellow.github.io/biat/index.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		practiceCategory1 : 
			{
				name : 'Mammals', //Will appear in the data.
				title : {
					media : {word : 'Mammals'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Dogs, Horses, Cows, Lions'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Dogs'}, 
					{word : 'Horses'}, 
					{word : 'Lions'}, 
					{word : 'Cows'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			}
	});
});
