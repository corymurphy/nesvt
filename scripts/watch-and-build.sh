#!/bin/bash

ls webcontent/views/* webcontent/js/* webcontent/css/* webcontent/layout/* webcontent/contact.php.tpl | entr pwsh ./Build-Website.ps1
