//
//  AIRGMSMarker.h
//  AirMaps
//
//  Created by Gil Birman on 9/5/16.
//  Copyright © 2016 Christopher. All rights reserved.
//

#import <GoogleMaps/GoogleMaps.h>
#import "UIView+React.h"

@interface AIRGMSMarker : GMSMarker
@property (nonatomic, strong) NSString *identifier;
@property (nonatomic, copy) RCTBubblingEventBlock onPress;
@end


@protocol AIRGMSMarkerDelegate <NSObject>
@required
-(void)didTapMarker;
@end