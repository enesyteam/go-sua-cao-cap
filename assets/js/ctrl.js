goSua.controller('MainCtrl', function( $rootScope, $scope, $http, $window, $document, $filter, 
	$timeout, MFirebaseService,toastr, toastrConfig, $interval ) {

	var configToastr = function() {
        toastrConfig.closeButton = false;
        toastrConfig.timeOut = 3000;
        toastrConfig.toastClass = 'notice';
        toastrConfig.containerId = 'global-notices';
        toastrConfig.iconClasses = {
            error: 'is-error',
            info: 'is-info',
            success: 'is-success',
            warning: 'is-warning'
          };
        // toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.positionClass = "toast-bottom-right";
    }

    configToastr();

    function AlertError(c, d) {
        toastr.error(c, d)
    };

    function AlertSuccessful(c, d) {
        toastr.success(c, d)
    };

    // AlertSuccessful( 'Đức Thành vừa đặt hàng thành công, Số ĐT 0912.525...', 'Thông báo' );

    function random_item(items){
		return items[Math.floor(Math.random()*items.length)];
	}

	function makeMessage(){
		return random_item( names ) + ' vừa đặt hàng thành công. Số điện thoại ' + random_item( mobiles );
	}

	var names = [ 'Đức Thành', 
	'Hoàng Nghĩa', 'Trọng Đức', 'Khánh BDS', 
	'Lâm Sung', 'Hoàng Sơn', 'Đình Hà',
	'Phan Trọng Lưu',
	'Nguyễn Đức Huấn',
	'Đặng Văn Thành',
	'Trương Việt Hùng',
	'Đỗ Văn Quân',
	'Nguyễn Hải',
	'Đức Cường',
	'Hà Minh',
	'Tonny Hùng',
	'Uyên Phạm',
	'Nguyễn Thị Định',
	'An Pham',
	'Chien Xuan',
	'Trinh Nguyen',
	'Que Pink',
	'Nguyen Tho',
	'Ngocanh Bống',
	'Đông Nguyên Thi',
	'Đại Sự',
	'Dinh Anh Nguyet',
	'Thuy Binh',
	'Uyen Nguyen',
	'Quan Hue',
	'Võ Thị Như Hoa',
	'Hải Đăng',
	'Kim Thao',
	'Cúc Hồng',
	'Mai Thị Hồi',
	'Tuấn Còiss',
	'Trong Nghia Hoang',
	'Thành Lê',
	'Nguyễn Phan Gia Huy',
	'Toàn Minh',
	'Đèn Nam Hồng',
	'Tung Lam',
	'Dân Shipper',
	'Nhan Ho',
	'Dat Le',
	'Trương Hữu Đức',
	'Thọ Dung',
	'Vu Đại',
	'Thuan Dinh Vu',
	'Vy Hiếu',
	'Bầu Trờj Khôg Tên',
	'LeAnh Ky',
	'Bob Dylan' ];
	var mobiles = [ '091285....', '0168255.....', '0986154...', '0978155...', 
	'0978414...', '09130252...', '0168225...', '0977121...', '0982125...' ];
	var timers = [ 8000, 15000, 3500, 10000, 16000, 1450 ];
	

	// setInterval(AlertSuccessful( makeMessage(), 'Thông báo' ),1000);

	$interval(function(){
	  AlertSuccessful( makeMessage(), 'Thông báo' );
	}, 10000)

	// alert('working');
	$scope.old_price = 1290000;
	$scope.price = 790000;

	$scope.welcome_message = "Chào mừng bạn đến với Phong thủy Tại Tâm";

	// console.log( MFirebaseService );

	$scope.feedbacks = [
		{
			name: 'TRƯƠNG ĐÌNH MÃO',
			content: 'Mình đeo vòng được gần 1 tuần rồi, phải nói là quá linh nghiệm, rất may mắn nữa. Nhờ sự giúp đỡ của mọi người mà mẹ mình đã mổ thành công rồi, mọi sự đều thuận lợi. Đúng là vạn sự tùy duyên mới gặp Shop. Mình xin cảm ơn nhiều! Chúc shop ngày càng đông khách!',
			address: 'Lục Ngạn - Bắc Giang',
			id: 667561183394063
		},
		{
			name: 'ĐẶNG TRƯỜNG GIANG',
			content: 'Mua hàng của shop đã lâu giờ mới viết đánh giá. Mình rất hài lòng khi mua hàng ở shop. Vòng rất đẹp, vân đẹp lắm và mùi gỗ rất thơm. Gói hàng cẩn thận, giao hàng rất nhanh. Rất thích cách làm việc của shop! Mua 1 lần là muốn mua thêm nhiều lần nữa!',
			address: 'Phương Mai - Hà Nội',
			id: 1772016989732091
		},
		{
			name: 'LƯƠNG NGỌC BÌNH',
			content: 'Mình rất ít khi mua hàng trên mạng vì nó không đáng tin, nhưng khi mình đặt mua ở đây thì thay đổi quan điểm hẳn. Giá cả vô cùng phải chăng, vận chuyển nhanh chóng... Mình rất là hài lòng khi mua!!! ',
			address: 'Trảng Bom - Đồng Nai',
			id: 771350329671297,
		},
		{
			name: 'TRƯƠNG CÔNG THIỆU',
			content: 'Đeo được một thời gian kết hợp với niềm tin sẵn có, tôi bắt đầu nhận thấy những chuyển biến tích cực về tinh thần. Tôi như tìm lại được nguồn năng lượng mà mình đã đánh mất, những cơn chóng mặt, stress cũng dần không còn nữa. Ngày qua ngày, tôi từ từ cảm thấy tốt hơn, tôi nhìn nhận các vấn đề tích cực hơn và có cách để giải quyết chúng',
			address: 'Vạn Hà - Thanh Hóa',
			id: 619804381512808,
		},
		{
			name: 'NGUYỄN BÁ GIANG',
			content: 'Mới đầu tôi cũng chẳng hiểu vợ tặng vòng tay cho tôi để làm gì. Vợ nói với tôi một câu rất hay: "Bị bệnh phải vái tứ phương. Khi khoa học không thể chữa khỏi cho anh thì anh cần phải có niềm tin vào những vật mang lại năng lượng và sự may mắn cho anh. Anh cứ đeo thử đi, đâu có mất mác gì',
			address: 'Thị xã Đông Hà - Quảng Trị',
			id: 142564399890885,
		},
		{
			name: 'ĐINH VĂN ĐỨC',
			content: 'Mình rất ít khi mua hàng trên mạng vì nó không đáng tin, nhưng khi mình đặt mua ở đây thì thay đổi quan điểm hẳn. Giá cả vô cùng phải chăng, vận chuyển nhanh chóng... Mình rất là hài lòng khi mua!!! ',
			address: 'Trùng Khánh - Cao Bằng',
			id: 235871433932161,
		},
	];

	$scope.customers = Math.floor( ((new Date().getTime())) / 1000 ) - 1533340000;
	$scope.today_customers = /*Math.floor( ((new Date().getTime())) / 1000 ) - 1533543000*/1028;

	$scope.orderData = {
		name: '',
		mobile: '',
	}

	$scope.submitOrder = function(){
		if( 
		 !$scope.orderData.mobile ||
		  
		   $scope.orderData.mobile.length == 0) {
			return;
		}

		if( !$scope.orderData.name ||  $scope.orderData.name.length == 0 ) {
			$scope.orderData.name = 'Khách lẻ';
		}
		$scope.isSubmitting = true;
	
		MFirebaseService.addOrder( $scope.orderData ).then( function( response ){
			$scope.$apply(function(){
				$scope.isSubmitting = false;
			})
			// alert('Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ bạn trong giây lát!');
			AlertSuccessful( 'Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ bạn trong giây lát!', 'Thông báo' );
			$scope.orderData = {
				name: '',
				mobile: '',
			}
		})
	}
})