//
//  ViewManagerBridge.h
//  CounterApp
//
//  Created by siva krishna on 27/06/20.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface ViewManagerBridge : NSObject<RCTBridgeModule>
-(void)changeToNativeView:(NSDictionary *) json;
@end

NS_ASSUME_NONNULL_END
