---
title: Tutoriais
weight: 219
---

## Unit tests

Tests has the main reason measure code functionality at its minor fraction. It is possible to make unit tests on Beagle, following the same process used to application's cases that does not use our tool, since Beagle doesn't interfere with the tests.

#

## Orchestrated tests 
Tests that are made as unit tests, but the difference is that in some cases, a server-driven component cannot have an ID, this generally identifies as an orchestrated test.

It is important to remember that this type of test made in applications that use Beagle the same way the ones that don't use our tool.


To get rid of problems with orchestrated tests, we add a widget element that refers to a component, and an id attribute, so that you can identify it programmatically.


We listed the examples of a case we have made testing a server-driven element. 

## How do we test?

On this example, we made an orchestrated test on the Android platform using Espresso (Framework de automação), we verified the functionality selection and value insertion in the server-driven text field component.

 ```Kotlin
@Test
    public void TestSelectTextField() {
        new BeagleRobot()
            .checkViewContainsText("Beagle Sample")
            .selectMenuOption()
            .clickOnText("TextField")
            .typeIntoTextField(0,0,"beagle")
            ;
    }
````

###  Step 1: starting the test

You have to start a test validating if the application was properly opened on the main page. You have to do it to confirm on the function below if the Header was presented on the screen.


This component does not have an ID, we use the text in the Header to locate this view on the main page. See the example below: 

```Kotlin
public BeagleTest checkViewContainsText(String text) {
        onView(allOf(withText(text))).check(matches(isDisplayed()));
        return this;
}
````
### Step 2: presenting the menu

After you locate the header, the next step is to use the function below to selec the hamburguer icon and present the options of this menu.

For being a server-driven component and doesn't have an ID on this implementation, we use the component's placement to perform this selection.

This way, we searched for the text on the ContentDescription ("More options"), and then its placement on the components hierarchy. See the example:

```Kotlin
public BeagleTest selectMenuOption() {
        onView(allOf(withContentDescription("More options"), childAtPosition(childAtPosition(withId(R.id.action_bar), 1), 0))).perform(click());
        return this;
}
````

### Step 3: selecting the component

Here, the test will click on a component (located from the text that it is in) calling a text field, that it is a menu item, already opened in the previous step.

```Kotlin
public BeagleTest clickOnText(final String text) {
        onView(allOf(withText(text), isDisplayed())).perform(click());
        return this;
}
````
### Step 4: inserting a component

We will insert a text to the text field component. Since this component doesn't have an ID or a text, it will be located by its placement in the hierarchy of the component. See the example below:

```Kotlin
public BeagleTest typeIntoTextField(int position1, int position2, String text) {
        onView(allOf(childAtPosition(
          childAtPosition(
            withId(R.id.fragment_content), position1), position2)
          )
        ).perform(typeText(text));
                
        Espresso.closeSoftKeyboard();
        return this;
}
````

{{% alert color="success" %}}

Done, your orchestrated test has been peformed! 

{{% /alert %}}

