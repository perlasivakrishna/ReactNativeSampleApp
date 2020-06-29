//
//  ViewManagerBridge.m
//  CounterApp
//
//  Created by siva krishna on 27/06/20.
//

#import "ViewManagerBridge.h"
#import "AppDelegate.h"

@implementation ViewManagerBridge
RCT_EXPORT_MODULE(ViewManagerBridge);
RCT_EXPORT_METHOD(changeToNativeView:(NSDictionary *) json) {
  NSLog(@"%@", json);
  NSLog(@"RN binding - Native View - Loading MyViewController.swift");
  dispatch_async(dispatch_get_main_queue(), ^{
      AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
       [appDelegate showNativeScreen];
  });
}

+ (BOOL)requiresMainQueueSetup {
  return true;
}
@end
