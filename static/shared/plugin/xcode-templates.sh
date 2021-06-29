#!/bin/bash

templates_directory="/Users/$(whoami)/Library/Developer/Xcode/Templates"
latest=$(curl --silent "https://api.github.com/repos/ZupIT/beagle-ios-templates/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

create_templates() {
    cd "$templates_directory" &&
    curl "https://codeload.github.com/ZupIT/beagle-ios-templates/tar.gz/refs/tags/$latest" --output beagle-ios-templates.tar.gz &&
    tar -xf beagle-ios-templates.tar.gz &&
    echo "Templates created at $templates_directory." &&
    rm beagle-ios-templates.tar.gz
}

if [ ! -d "$templates_directory" ]
then
    mkdir "$templates_directory"
    create_templates
else
    create_templates
fi

exit 0