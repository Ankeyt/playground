// const rewards = {
//   '_id': 'BRE_REWARD_20250610_001',
//   'eventReferenceId': 'ORD_123456',
//   'loyaltyId': 'LYL_987654321',
//   'rewardProgramId': 'RP_20250610_001',
//   'type': 'CHOICE',
//   'status': 'PENDING_SELECTION', // ENUM
//   'source': 'ADL',
//   'choiceGroupId': 'CHOICEGROUP_20250610_01',
//   'rewardConfig':{
//     maximumRedemptions: 1,
//     maxOptions: 2,
//     currentRedemptions: 0,
//   },
//   'rewardOptions': [ // From RP
//     {
//       'optionId': 'OPT_001',
//       'title': 'Free Dessert',
//       'type': 'IN_KIND'
//     },
//     {
//       'optionId': 'OPT_002',
//       'title': '₹50 Coco Cart Voucher',
//       'type': 'COUPON',
//       'couponTemplate': 'COCO50'
//     }
//   ],
//   'selectedOptions': [],
//   'isSoftDeleted': false,
//   'createdOn': '2025-06-10T10:30:00Z',
//   'modifiedOn': '2025-06-10T10:30:00Z'
// };

// const r2 = {
//   '_id': 'BRE_REWARD_20250610_001',
//   'eventReferenceId': 'ORD_123456',
//   'loyaltyId': 'LYL_987654321',
//   'rewardProgramId': 'RP_20250610_001',
//   'milestone': 2,
//   'type': 'COUPON',
//   'status': 'CLAIMED',
//   'source': 'ADL',
//   'choiceGroupId': 'CHOICEGROUP_20250610_01',
//   'reward': {
//     'title': '₹100 Coco Cart Voucher',
//     'description': 'Voucher redeemable at Coco Cart',
//     'terms': 'Valid on minimum ₹299 spend',
//     'couponCode': 'COCO100-XYZ123',
//     'expiry': '2025-06-15T00:00:00Z',
//     'currency': 'INR',
//     'value': 100
//   },
//   'createdOn': '2025-06-10T11:00:00Z',
//   'modifiedOn': '2025-06-10T11:00:00Z',
//   'isSoftDeleted': false
// };

const newRewards = [
  { 
    'reward': {
  	'token': 'V4ZE823725TQDxgu:10', 
  	'type': 'PROMO', 
  	'reference': '25040307105279910283:67b7025a57a85410516d0695', 
  	'batchId': 'couponId', 
  	'couponCode': 'FBCAR117XYE6M', 
  	'loyaltyId': '67e3c81722303f3f090dcfc5', 
  	'responseType': 'PROMO_CODE', 
  	'discount': 0, 
  	'capping': 0, 
  	'businessSubType': 'F&B', 
  	'cvpLob': 'F&B', 
  	'extras': { 
    	'title': 'Free Dessert', 
    	'lobUniqueId': '14', 
    	'claimLink': 'https://www.uat.adanione.com/parking' 
  	}, 
  	'expiry': '2025-04-04T07:53:21.578Z' 
    }, 
    'loyaltyId': '67e3c81722303f3f090dcfc5', 
    'rewardProgramId': '67b7025a57a85410516d0695', 
    'eventReferenceId': '25040307105279910283', 
    'source': 'ADL', 
    'type': 'PROMO', 
    'isSoftDeleted': false, 
    'notificationRule': {} 
  },
  { 
    '_id': '67ee3e712ccd0f9a1a295396', 
    'reward': { 
  	'version': 'v2', 
  	'type': 'MULTI_CHOICE', 
  	'loyaltyId': '67e3c81722303f3f090dcfc5', 
  	'responseType': 'CLAIM_TOKEN', 
  	'redemptionConfig': { 
    	'maxRedemptions': 1, 
    	'options': 2, 
    	'currentRedemptions': 0
  	}, 
  	'rewardOptions': [ 
    	{ 
      	'itemId': 'OPT_001', 
      	'token': 'wysR4BvpcJumPw9V:8', 
      	'content': { 
        	'title': 'Free Dessert', 
        	'predefined': { 
          	'lobUniqueId': '2' 
        	}, 
        	'templates': { 
          	'claimLink': 'https://www.adanione.com/{{{airportName(pickupAirport)}}}/duty-free?location={{{lowercase(pickupOn)}}}&couponCode={{couponCode}}' 
        	} 
      	}, 
      	'assignment': { 
        	'type': 'UPLOADED', 
        	'batchId': 'identity', 
        	'quantity': 1
      	} 
    	}, 
    	{ 
      	'itemId': 'OPT_002', 
      	'token': 'wysR4BvpcJumPw9V:9', 
      	'content': { 
        	'title': '₹50 Coco Cart Voucher', 
        	'predefined': { 
          	'lobUniqueId': '2' 
        	}, 
        	'templates': { 
          	'claimLink': 'https://www.adanione.com/{{{airportName(pickupAirport)}}}/duty-free?location={{{lowercase(pickupOn)}}}&couponCode={{couponCode}}' 
        	} 
      	}, 
      	'assignment': { 
        	'type': 'DYNAMIC', 
        	'masteref': '6rtyuuyrtyrt77', 
        	'quantity': 1
      	} 
    	} 
  	], 
  	'claimExpiry': '2025-04-04T07:53:21.578Z', 
  	'eventData': { 
    	'pickupAirport': 'BOM', 
    	'pickupType': 'PICKUP_NOW', 
    	'pickupTime': '2025-04-03T07:40:00.000Z', 
    	'pickupOn': 'DEPARTURE' 
  	}, 
  	'expiry': '2025-04-04T07:53:21.578Z' 
    }, 
    'isSoftDeleted': false, 
    'loyaltyId': '67e3c81722303f3f090dcfc5', 
    'rewardProgramId': '67b7025a57a85410516d0695', 
    'eventReferenceId': '25040307105279910283', 
    'source': 'ADL', 
    'type': 'MULTI_CHOICE', 
    'notificationRule': {} 
  }
];
