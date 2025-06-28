const schema = {
  '_id': 'RP_20250610_001',
  'status': 'ACTIVE',
  'validityStart': '2025-06-01T00:00:00Z',
  'validityEnd': '2026-06-01T00:00:00Z',
  'source': 'ADL',
  'keywords': ['adl', 'milestone', 'fnb'],
  'configuration': {
    'information': {
      'name': 'Milestone-Based F&B Offer',
      'description': 'Get free dessert, cookies, sandwich, coffee or chocolate based on milestone purchases.'
    },
    'triggerSource': 'ADL',
    'triggerOn': 'ORDER',
    'businessCategory': 'F&B',
    'milestoneRules': [
      {
        'milestoneNumber': 1,
        'minimumATV': 299,
        'reward': {
          'type': 'CHOICE',
          'options': ['Free Dessert', '₹50 Coco Cart Voucher']
        },
        'airports': ['ALL'],
        'generation': {
          'type': 'IMMEDIATE',
          'expiry': {
            'in': 3,
            'unit': 'DAYS'
          }
        }
      },
      {
        'milestoneNumber': 2,
        'minimumATV': 299,
        'reward': {
          'type': 'CHOICE',
          'options': ['Free Cookie/Biscuit', '₹100 Coco Cart Voucher']
        },
        'airports': ['ALL'],
        'generation': {
          'type': 'IMMEDIATE',
          'expiry': {
            'in': 3,
            'unit': 'DAYS'
          }
        }
      },
      {
        'milestoneNumber': 3,
        'minimumATV': 299,
        'reward': {
          'type': 'CHOICE',
          'options': ['Free Sandwich', '₹150 Coco Cart Voucher']
        },
        'airports': ['ALL'],
        'generation': {
          'type': 'IMMEDIATE',
          'expiry': {
            'in': 3,
            'unit': 'DAYS'
          }
        }
      },
      {
        'milestoneNumber': 4,
        'minimumATV': 299,
        'reward': {
          'type': 'CHOICE',
          'options': ['Free Coffee', '₹200 Coco Cart Voucher']
        },
        'airports': ['ALL'],
        'generation': {
          'type': 'IMMEDIATE',
          'expiry': {
            'in': 3,
            'unit': 'DAYS'
          }
        }
      },
      {
        'milestoneNumber': 5,
        'minimumATV': 299,
        'reward': {
          'type': 'CHOICE',
          'options': ['Free Chocolate', '₹250 Coco Cart Voucher']
        },
        'airports': ['ALL'],
        'generation': {
          'type': 'IMMEDIATE',
          'expiry': {
            'in': 3,
            'unit': 'DAYS'
          }
        }
      }
    ]
  },
  'createdById': 'admin_user_id',
  'modifiedById': 'admin_user_id',
  'createdOn': '2025-06-10T12:00:00Z',
  'modifiedOn': '2025-06-10T12:00:00Z'
};

const existing={ 
  'validityStart': { 
    '$date': '2025-04-03T07:45:06.329Z' 
  }, 
  'status': 'ACTIVE', 
  'validityEnd': { 
    '$date': '2026-04-03T07:45:06.329Z' 
  }, 
  'source': 'ADL', 
  'configuration': { 
    'information': { 
  	'name': 'DutyFree Cross Sell', 
  	'description': 'Get Duty free beauty coupon on DutyFree order' 
    }, 
    'triggerSource': 'ADL', 
    'configuration': { 
  	'triggerOn': 'ORDER', 
  	'orderConfiguration': { 
    	'businessCategory': 'DutyFree', 
    	'orderState': { 
      	'rewardRule': { 
        	'type': 'PROMO', 
        	'calculation': { 
          	'rule': { 
            	'type': 'CONFIG_VALUE' 
          	} 
        	}, 
        	'quantity': { 
          	'rule': { 
            	'type': 'CONFIG_VALUE', 
            	'quantity': 1
          	} 
        	}, 
        	'masterRef': 'a49433aa-863f-4919-927a-e5ca117b04d1', 
        	'generation': { 
          	'rule': { 
            	'type': 'ON_CLAIM', 
            	'expiry': { 
              	'in': 1, 
              	'unit': 'DAYS' 
            	} 
          	} 
        	}, 
        	'reply': { 
          	'predefined': { 
            	'lobUniqueId': '2' 
          	}, 
          	'templates': { 
            	'claimLink': 'https://www.uat.adanione.com/{{{airportName(pickupAirport)}}}/duty-free?location={{{lowercase(pickupOn)}}}&couponCode={{couponCode}}' 
          	} 
        	} 
      	}, 
      	'reversalRule': { 
        	'enabled': false, 
        	'reverseOn': 'SYSTEM_CANCELLATION' 
      	}, 
      	'state': 'PLACEMENT', 
      	'matchRule': { 
        	'amountRestrictions': [], 
        	'transactionRestriction': { 
          	'period': 'MONTHLY', 
          	'maximum': 2000000, 
          	'perUser': true, 
          	'categoryWise': false, 
          	'programWise': true, 
          	'inCategories': [] 
        	}, 
        	'offerApplicableOn': 'TAXABLE_AMOUNT', 
        	'skuRule': {}, 
        	'skuRuleEnabled': false
      	}, 
      	'notificationRule': {} 
    	} 
  	} 
    } 
  },
};

const newPrograms = {
  'version': 'v2',
  'status': 'ACTIVE',
  'validityStart': {
    '$date': '2025-06-01T00:00:00Z'
  },
  'validityEnd': {
    '$date': '2026-06-01T00:00:00Z'
  },
  'source': 'ADL',
  'keywords': ['adl', 'milestone', 'fnb'],
  'configuration': {
    'information': {
      'name': 'Milestone-Based F&B Offer',
      'description': 'Get free dessert, cookies, sandwich, coffee or chocolate based on milestone purchases.'
    },
    'triggerSource': 'ADL',
    'configuration': {
      'triggerOn': 'ORDER',
      'orderConfiguration': {
        'businessCategory': 'F&B',
        'orderState': {
          'state': 'PLACEMENT',
          'rewardRule': {
            'type': 'MULTI_CHOICE',
            'redemptionConfig': {
              'maxRedemptions': 1,
              'options': 2,
              'currentRedemptions': 0
            },
            'rewardOptions': [
              {
                'itemId': 'OPT_001',
                'token': 'xyz123:1',
                'content': {
                  'title': 'Free Dessert',
                  'predefined': {
                    'lobUniqueId': '2'
                  },
                  'templates': {
                    'claimLink': 'https://www.adanione.com/{{{airportName(pickupAirport)}}}/duty-free?location={{{lowercase(pickupOn)}}}&couponCode={{couponCode}}'
                  }
                },
                'generation': {
                  'rule': {
                    'type': 'IMMEDIATE',
                    'expiry': {
                      'in': 3,
                      'unit': 'DAYS'
                    }
                  }
                },
                'assignment': {
                  'type': 'UPLOADED',
                  'batchId': 'identity_batch_id',
                  'quantity': 2
                }
              },
              {
                'itemId': 'OPT_002',
                'token': 'xyz123:2',
                'content': {
                  'title': '₹50 Coco Cart Voucher',
                  'predefined': {
                    'lobUniqueId': '2'
                  },
                  'templates': {
                    'claimLink': 'https://www.adanione.com/{{{airportName(pickupAirport)}}}/duty-free?location={{{lowercase(pickupOn)}}}&couponCode={{couponCode}}'
                  }
                },
                'generation': {
                  'rule': {
                    'type': 'IMMEDIATE',
                    'expiry': {
                      'in': 3,
                      'unit': 'DAYS'
                    }
                  }
                },
                'assignment': {
                  'type': 'DYNAMIC',
                  'masterRef': 'master_ref_abc123',
                  'quantity': 3
                }
              }
            ],
          },
          'matchRule': {
            'amountRestrictions': [
              {
                'field': 'ATV',
                'operator': '>=',
                'value': 299
              }
            ],
            'transactionRestriction': {
              'period': 'LIFETIME',
              'maximum': 999999,
              'perUser': true,
              'categoryWise': false,
              'programWise': true,
              'inCategories': []
            },
            'offerApplicableOn': 'ATV',
            'skuRule': {},
            'skuRuleEnabled': false
          },
          'notificationRule': {
            'enabled': false,
            'rules': []
          },
          'reversalRule': {
            'enabled': false,
            'reverseOn': 'SYSTEM_CANCELLATION'
          }
        }
      },
      'milestone': {
        'number': 1,
        'type': 'AMOUNT',
        'condition': {
          'field': 'ATV',
          'operator': '>=',
          'value': 299
        },
        'description': 'Milestone 1 - Spend ₹299+ to choose free dessert or ₹50 voucher'
      }
    },
  },
  'createdById': 'admin_user_id',
  'modifiedById': 'admin_user_id',
  'createdOn': {
    '$date': '2025-06-11T12:00:00Z'
  },
  'modifiedOn': {
    '$date': '2025-06-11T12:00:00Z'
  }
};