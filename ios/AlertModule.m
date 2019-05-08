//
//  AlertModule.m
//  RNHarryExample
//
//  Created by Harry Nguyen on 5/8/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

// CalendarManager.m
#import "AlertModule.h"
#import <UIKit/UIKit.h>
#import "AppDelegate.h"

@implementation AlertModule

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);
RCT_EXPORT_METHOD(showToast:(NSString *)message)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:nil
                                                    message:message
                                                   delegate:nil
                                          cancelButtonTitle:@"OK"
                                          otherButtonTitles:nil];
    [alert show];
  });
 

}

@end
