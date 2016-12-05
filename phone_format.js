(function (window, document) {
    'use strict';
    var AREA_CODES = [
        '020', '023', '024', '028', '029', '0113',
        '0114', '0115', '0116', '0117', '0118', '0121',
        '0131', '0141', '0151', '0161', '0191', '01200',
        '01202', '01204', '01205', '01206', '01207', '01208',
        '01209', '01223', '01224', '01225', '01226', '01227',
        '01228', '01229', '01233', '01234', '01235', '01236',
        '01237', '01239', '01241', '01242', '01243', '01244',
        '01245', '01246', '01248', '01249', '01250', '01252',
        '01253', '01254', '01255', '01256', '01257', '01258',
        '01259', '01260', '01261', '01262', '01263', '01264',
        '01267', '01268', '01269', '01270', '01271', '01273',
        '01274', '01275', '01276', '01277', '01278', '01279',
        '01280', '01282', '01283', '01284', '01285', '01286',
        '01287', '01288', '01289', '01290', '01291', '01292',
        '01293', '01294', '01295', '01296', '01297', '01298',
        '01299', '01300', '01301', '01302', '01303', '01304',
        '01305', '01306', '01307', '01308', '01309', '01320',
        '01322', '01323', '01324', '01325', '01326', '01327',
        '01328', '01329', '01330', '01332', '01333', '01334',
        '01335', '01337', '01339', '01340', '01341', '01342',
        '01343', '01344', '01346', '01347', '01348', '01349',
        '01350', '01352', '01353', '01354', '01355', '01356',
        '01357', '01358', '01359', '01360', '01361', '01362',
        '01363', '01364', '01366', '01367', '01368', '01369',
        '01371', '01372', '01373', '01375', '01376', '01377',
        '01379', '01380', '01381', '01382', '01383', '01384',
        '01386', '01387', '01388', '01389', '01392', '01394',
        '01395', '01397', '01398', '01400', '01403', '01404',
        '01405', '01406', '01407', '01408', '01409', '01420',
        '01422', '01423', '01424', '01425', '01427', '01428',
        '01429', '01430', '01431', '01432', '01433', '01434',
        '01435', '01436', '01437', '01438', '01439', '01440',
        '01442', '01443', '01444', '01445', '01446', '01449',
        '01450', '01451', '01452', '01453', '01454', '01455',
        '01456', '01457', '01458', '01460', '01461', '01462',
        '01463', '01464', '01465', '01466', '01467', '01469',
        '01470', '01471', '01472', '01473', '01474', '01475',
        '01476', '01477', '01478', '01479', '01480', '01481',
        '01482', '01483', '01484', '01485', '01487', '01488',
        '01489', '01490', '01491', '01492', '01493', '01494',
        '01495', '01496', '01497', '01499', '01501', '01502',
        '01503', '01505', '01506', '01507', '01508', '01509',
        '01520', '01522', '01524', '01525', '01526', '01527',
        '01528', '01529', '01530', '01531', '01534', '01535',
        '01536', '01538', '01539', '01540', '01542', '01543',
        '01544', '01545', '01546', '01547', '01548', '01549',
        '01550', '01553', '01554', '01555', '01556', '01557',
        '01558', '01559', '01560', '01561', '01562', '01563',
        '01564', '01565', '01566', '01567', '01568', '01569',
        '01570', '01571', '01572', '01573', '01575', '01576',
        '01577', '01578', '01579', '01580', '01581', '01582',
        '01583', '01584', '01586', '01588', '01590', '01591',
        '01592', '01593', '01594', '01595', '01597', '01598',
        '01599', '01600', '01603', '01604', '01606', '01608',
        '01609', '01620', '01621', '01622', '01623', '01624',
        '01625', '01626', '01628', '01629', '01630', '01631',
        '01633', '01634', '01635', '01636', '01637', '01638',
        '01639', '01641', '01642', '01643', '01644', '01646',
        '01647', '01650', '01651', '01652', '01653', '01654',
        '01655', '01656', '01659', '01661', '01663', '01664',
        '01665', '01666', '01667', '01668', '01669', '01670',
        '01671', '01672', '01673', '01674', '01675', '01676',
        '01677', '01678', '01680', '01681', '01683', '01684',
        '01685', '01686', '01687', '01688', '01689', '01690',
        '01691', '01692', '01694', '01695', '01697', '01698',
        '01700', '01702', '01704', '01706', '01707', '01708',
        '01709', '01720', '01721', '01722', '01723', '01724',
        '01725', '01726', '01727', '01728', '01729', '01730',
        '01732', '01733', '01736', '01737', '01738', '01740',
        '01743', '01744', '01745', '01746', '01747', '01748',
        '01749', '01750', '01751', '01752', '01753', '01754',
        '01756', '01757', '01758', '01759', '01760', '01761',
        '01763', '01764', '01765', '01766', '01767', '01768',
        '01769', '01770', '01771', '01772', '01773', '01775',
        '01776', '01777', '01778', '01779', '01780', '01782',
        '01784', '01785', '01786', '01787', '01788', '01789',
        '01790', '01792', '01793', '01794', '01795', '01796',
        '01797', '01798', '01799', '01803', '01805', '01806',
        '01807', '01808', '01809', '01821', '01822', '01823',
        '01824', '01825', '01827', '01828', '01829', '01830',
        '01832', '01833', '01834', '01835', '01837', '01838',
        '01840', '01841', '01842', '01843', '01844', '01845',
        '01847', '01848', '01851', '01852', '01854', '01855',
        '01856', '01857', '01858', '01859', '01862', '01863',
        '01864', '01865', '01866', '01869', '01870', '01871',
        '01872', '01873', '01874', '01875', '01876', '01877',
        '01878', '01879', '01880', '01882', '01883', '01884',
        '01885', '01886', '01887', '01888', '01889', '01890',
        '01892', '01895', '01896', '01899', '01900', '01902',
        '01903', '01904', '01905', '01908', '01909', '01920',
        '01922', '01923', '01924', '01925', '01926', '01928',
        '01929', '01931', '01932', '01933', '01934', '01935',
        '01937', '01938', '01939', '01942', '01943', '01944',
        '01945', '01946', '01947', '01948', '01949', '01950',
        '01951', '01952', '01953', '01954', '01955', '01957',
        '01959', '01962', '01963', '01964', '01967', '01968',
        '01969', '01970', '01971', '01972', '01974', '01975',
        '01977', '01978', '01980', '01981', '01982', '01983',
        '01984', '01985', '01986', '01987', '01988', '01989',
        '01992', '01993', '01994', '01995', '01997', '013873',
        '015242', '015394', '015395', '015396', '016973', '016974',
        '017683', '017684', '017687', '019467'
    ].reverse();

    var format_geographic = function (digits) {
        var code = AREA_CODES.find(c => digits.startsWith(c))
        if (code === undefined) {
            return '';
        } else {
            var without_code = digits.slice(code.length);
            var midpoint = Math.ceil(without_code.length / 2);
            var formatted = (
                '(' + code + ') ' +
                without_code.slice(0, midpoint) +
                '-' +
                without_code.slice(midpoint)
            );
            return formatted;
        }
    };

    var format_generic = function (digits, part_lengths) {
        var working = digits;
        var parts = [];
        part_lengths.forEach(function (len) {
            parts.push(working.slice(0, len));
            working = working.slice(len);
        });
        return parts[0] + ' ' + parts[1] + '-' + parts[2];
    };

    var check_digits = function (candidate, prefixes, lengths) {
        for (let pref of prefixes) {
            for (let len of lengths) {
                if ((candidate.startsWith(pref)) && (candidate.length === len)) {
                    return true;
                }
            }
        }
        return false;
    };

    var format_phone_number = function (input) {
        var digits = input.split('').map( s => s.match(/\d/) ).join('');

        if (check_digits(digits, ['01'], [10, 11])) {
            return format_geographic(digits);
        }
        else if (check_digits(digits, ['02'], [11])) {
            return format_geographic(digits);
        }
        else if (check_digits(digits, ['07'], [11])) {
            return format_generic(digits, [5, 3, 3]);
        }
        else if (check_digits(digits, ['03', '05', '08', '09'], [11])) {
            return format_generic(digits, [4, 4, 3]);
        }
        else if (check_digits(digits, ['0500', '0800'], [10])) {
            return format_generic(digits, [4, 3, 3]);
        }
        else if (check_digits(digits, ['08001111', '0845464'], [8])) {
            return format_generic(digits, [4, 2, 2]);
        }
        else {
            return '';
        }
    };

    window.addEventListener('load', function () {
        var input_box = document.getElementById('input');
        var output_box = document.getElementById('output');
        input_box.addEventListener('keyup', function () {
            output_box.innerHTML = format_phone_number(input_box.value);
        });
    });

}(window, document));
