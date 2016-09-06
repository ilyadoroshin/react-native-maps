//
//  AIRGoogleMapManager.m
//  AirMaps
//
//  Created by Gil Birman on 9/1/16.
//


#import "AIRGoogleMapManager.h"
#import "RCTViewManager.h"
#import "RCTBridge.h"
#import "RCTUIManager.h"
#import "RCTConvert+CoreLocation.h"
#import "RCTConvert+MapKit.h"
#import "RCTEventDispatcher.h"
#import "AIRGoogleMap.h"
#import "UIView+React.h"
#import "AIRMapMarker.h"
#import "RCTViewManager.h"
#import "RCTConvert.h"
#import "AIRMapPolyline.h"
#import "AIRMapPolygon.h"
#import "AIRMapCircle.h"
#import "SMCalloutView.h"

#import <MapKit/MapKit.h>

static NSString *const RCTMapViewKey = @"MapView";


@interface AIRGoogleMapManager() <GMSMapViewDelegate>

@end

@implementation AIRGoogleMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  AIRGoogleMap *map = [AIRGoogleMap new];
  map.delegate = self;
  return map;
}

RCT_EXPORT_VIEW_PROPERTY(initialRegion, MKCoordinateRegion)
RCT_EXPORT_VIEW_PROPERTY(onMarkerPress, RCTDirectEventBlock)

- (BOOL)mapView:(GMSMapView *)mapView didTapMarker:(GMSMarker *)marker {
  AIRGoogleMap *googleMapView = (AIRGoogleMap *)mapView;
  [googleMapView didTapMarker:marker];
  return NO;
}

@end
