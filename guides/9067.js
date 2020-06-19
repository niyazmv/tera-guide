﻿// Demokron Factory (Hard)
//
// made by michengs

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-467-46703-213-0": [{"type": "text","sub_type": "message","message": 'Back attack',"message_RU": "Задняя"}],
	"s-467-46704-205-0": [{"type": "text","sub_type": "message","delay":2500,"message":  'Pushback',"message_RU": "Откид"}],
	//"s-467-46704-206-0": [{"type": "text","sub_type": "message","message": '206',"message_RU": "206"}],
	//"s-467-46704-207-0": [{"type": "text","sub_type": "message","message": '207',"message_RU": "207"}],

	"s-467-46704-208-0": [{"type": "text","sub_type": "message","message": 'Laser',"message_RU": "Лазер"},
						  {"type": "text","sub_type": "message","delay": 13000,"message": 'Pushback',"message_RU": "Откид"}
	],
	"s-467-46704-209-0": [{"type": "text","sub_type": "message","message": 'Attack to tank',"message_RU": "Удар в танка"}],
	"s-467-46704-210-0": [{"type": "text","sub_type": "message","message": 'Laser',"message_RU": "Лазер"},
						  {"type": "text","sub_type": "message","delay": 21000,"message": 'Pushback - Iframe',"message_RU": "Откид"}
	],
	"s-467-46704-211-0": [{"type": "text","sub_type": "message","message": 'Wave',"message_RU": "Одна волна"},
						  {"type": "text","sub_type": "message","delay": 3000,"message": 'Dodge',"message_RU": "Эвейд!"}
	],
	"s-467-46704-212-0": [{"type": "text","sub_type": "message","message": 'Waves',"message_RU": "Волны"},
						  {"type": "text","sub_type": "message","delay": 3000,"message": 'Dodge',"message_RU": "Эвейд!"}
	],
	"s-467-46704-213-0": [{"type": "text","sub_type": "message","message": 'Circles',"message_RU": "Круги!!"},
						  {"type": "text","sub_type": "message","delay": 1000,"message": 'Dodge',"message_RU": "Эвейд!"}
						  //{"type": "text","sub_type": "message","delay": 4000,"message": 'Along',"message_RU": "На месте"}
	],
	"s-467-46704-214-0": [{"type": "text","sub_type": "message","message": 'Circles',"message_RU": "Круги!!"},
						  {"type": "text","sub_type": "message","delay": 1000,"message": 'Dodge',"message_RU": "Эвейд!"}
						  //{"type": "text","sub_type": "message","delay": 4000,"message": 'Reverse',"message_RU": "Обратно"}
	],
	"s-467-46704-215-0": [{"type": "text","sub_type": "message","message": 'Circles',"message_RU": "Круги!"},
						  {"type": "text","sub_type": "message","delay": 1000,"message": 'Dodge',"message_RU": "Эвейд!"}
	],
	"s-467-46704-216-0": [{"type": "text","sub_type": "message","message": 'Circles',"message_RU": "Круги!!"},
						  {"type": "text","sub_type": "message","delay": 1000,"message": 'Dodge',"message_RU": "Эвейд!"}
	],
	"s-467-46704-217-0": [{"type": "text","sub_type": "message","message": 'Circles',"message_RU": "Круги!!"},
						  {"type": "text","sub_type": "message","delay": 1000,"message": 'Dodge',"message_RU": "Эвейд!"}
	],
	"s-467-46704-219-0": [{"type": "text","sub_type": "message","message": 'Two waves',"message_RU": "Две волны"},
						  {"type": "text","sub_type": "message","delay": 3000,"message": 'Dodge',"message_RU": "Эвейд!"}
	]
};