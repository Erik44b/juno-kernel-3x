function Clear () {
    spriteutils.setConsoleOverlay(false)
    pause(100)
    spriteutils.setConsoleOverlay(true)
    pause(100)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    pause(500)
    console.log("Data Used: " + blockSettings.list().length + " Settings, " + ("" + Command_List.length + " Command(s)"))
    console.log("")
    pause(500)
    if (Command_List.length > 0) {
        pause(500)
        console.log(" ")
        if (blockSettings.exists("MostRecentFile")) {
            console.log("SHORTCUTS")
            console.log("----------------")
            console.log(blockSettings.readString("MostRecentFile"))
            console.log("Press [B] to Access!")
        }
        console.log(" ")
        console.log("COMMANDS")
        console.log("----------------")
        console.log(Command_List)
        console.log("Press [A] to Access!")
    }
    console.log(" ")
    console.log("Juno > ____")
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readString("MostRecentFile") == "Directory") {
        Directory()
    } else if (blockSettings.readString("MostRecentFile") == "Version") {
        Version()
    } else if (blockSettings.readString("MostRecentFile") == "VersionLog") {
        VersionLog()
    } else if (blockSettings.readString("MostRecentFile") == "Files") {
        Files()
    } else if (blockSettings.readString("MostRecentFile") == "Registry") {
        Registry()
    } else if (blockSettings.readString("MostRecentFile") == "Help") {
        Help()
    } else if (blockSettings.readString("MostRecentFile") == "Clear") {
        Clear()
    }
})
function Registry_Rename () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    spriteutils.setConsoleOverlay(false)
    OldTempFileName = game.askForString("Insert Old File Name")
    if (blockSettings.exists(OldTempFileName)) {
        Temporary_File_Data = blockSettings.readString(OldTempFileName)
        Temporary_File_Name = game.askForString("Insert New File Name")
        blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
        blockSettings.remove(OldTempFileName)
        if (OldTempFileName == "Bootloader") {
            pause(500)
            Error_Screen2()
        }
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("File with name \"" + Temporary_File_Name + "\"")
        console.log("Not Found.")
        console.log(" ")
        console.log("Juno > ____")
    }
}
function Registry () {
    console.log(" ")
    console.log("Files:")
    Setting__Command_List()
    console.log("Add File (?)")
    console.log(" ")
    console.log("Juno > Registry > ____")
    pause(5000)
    spriteutils.setConsoleOverlay(false)
    blockSettings.writeString("DirectorySearch", game.askForString("Registry > ____"))
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    if (blockSettings.readString("DirectorySearch") == "Add") {
        Registry_Add()
    } else if (blockSettings.readString("DirectorySearch") == "View") {
        Registry_View()
    } else if (blockSettings.readString("DirectorySearch") == "Delete") {
        Registry_Delete()
    } else if (blockSettings.readString("DirectorySearch") == "Edit") {
        Registry_Edit()
    } else if (blockSettings.readString("DirectorySearch") == "Rename") {
        Registry_Rename()
    } else {
        Registry001()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteutils.setConsoleOverlay(false)
    blockSettings.writeString("DirectorySearch", game.askForString("Insert Command"))
    if (blockSettings.exists(blockSettings.readString("DirectorySearch"))) {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + blockSettings.readString("DirectorySearch") + "\"")
        if (blockSettings.readString("DirectorySearch") == "Directory") {
            Directory()
        } else if (blockSettings.readString("DirectorySearch") == "Version") {
            Version()
        } else if (blockSettings.readString("DirectorySearch") == "VersionLog") {
            VersionLog()
        } else if (blockSettings.readString("DirectorySearch") == "Files") {
            Files()
        } else if (blockSettings.readString("DirectorySearch") == "Registry") {
            Registry()
        } else if (blockSettings.readString("DirectorySearch") == "Help") {
            Help()
        } else if (blockSettings.readString("DirectorySearch") == "Clear") {
            Clear()
        }
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("Error 001 - No Settings")
        console.log("found with name \"" + blockSettings.readString("DirectorySearch") + "\"")
        pause(100)
        console.log(" ")
        console.log("Available Commands:")
        console.log(Command_List)
        console.log(" ")
        console.log("Juno > ____")
    }
})
function Setting__Command_List () {
    console.log("Files")
    pause(10)
    console.log("Directory")
    pause(10)
    console.log("Version")
    pause(10)
    console.log("VersionLog")
    pause(10)
    console.log("Bootloader")
    pause(10)
    console.log("Registry")
    pause(10)
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_Add () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    Temporary_File_Data = game.askForString("Insert File Data")
    blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("\"" + Temporary_File_Name + "\"" + " " + "has Been Created.")
}
function Juno () {
    blockSettings.writeNumber("Version", 32)
    blockSettings.writeString("VersionLog", "Version 0031a")
    SystemReinstallVerificationBoolean = false
    blockSettings.writeString("Directory", "Directory")
    blockSettings.writeString("Directory.Search", "DirectorySearch")
    blockSettings.writeString("Files", "Settings + Commands")
    blockSettings.writeString("Clear", "ver0.27.0")
    blockSettings.writeString("Registry", "ver0.27.0")
    blockSettings.writeString("Help", "ver0.27.0")
    Command_List = [
    "Directory",
    "Version",
    "VersionLog",
    "Files",
    "Registry",
    "Help"
    ]
    Juno_Terminal()
}
function Error_Screen2 () {
    spriteutils.setConsoleOverlay(false)
    pause(500)
    scene.setBackgroundColor(2)
    pause(100)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel")
    console.log(" ")
    console.log("FATAL ERROR")
    console.log("003 - Key File Renamed")
    console.log(" ")
    console.log("What can I do to fix this?")
    console.log("- Restart the Simulator. ")
    console.log("- Juno will need to reinstall the Bootloader.")
    console.log("- All Settings will be removed.")
    blockSettings.clear()
    while (true) {
        pause(100)
    }
}
function Registry001 () {
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log(" ")
    console.log("Files:")
    Setting__Command_List()
    console.log(" ")
    console.log("Command Not Found.")
    console.log(" ")
    console.log("Juno > ____")
}
function Help () {
    spriteutils.setConsoleOverlay(true)
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("Help(?)")
    console.log("- Have any questions?")
    pause(100)
    console.log("- Have any comments?")
    pause(100)
    console.log("Contact Erik_ or Erik44b on Github or go")
    console.log("to the JunoKernel Repository to ask any")
    console.log("questions / add / remove something")
}
function Juno_Terminal () {
    spriteutils.setConsoleOverlay(true)
    pause(100)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    pause(500)
    console.log("Data Used: " + blockSettings.list().length + " Settings, " + ("" + Command_List.length + " Command(s)"))
    pause(500)
    if (Command_List.length > 0) {
        pause(500)
        if (blockSettings.exists("MostRecentFile")) {
            console.log("----------------")
            console.log("SHORTCUTS")
            console.log(blockSettings.readString("MostRecentFile"))
            console.log("Press [B] to Access!")
        }
        console.log("----------------")
        console.log("COMMANDS")
        console.log(Command_List)
        console.log("Press [A] to Access!")
    } else {
        console.log(" ")
        console.log("Error 000 - No Commands")
        console.log("Listed in Directory.")
        pause(500)
        console.log(" ")
        console.log("Please Reinstall the Juno")
        console.log("Kernel or Upgrade to a ")
        console.log("newer version.")
        pause(500)
        console.log(" ")
        console.log("Current Version:")
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        pause(500)
        if (blockSettings.readNumber("Version") <= 0) {
            console.log(" ")
            console.log("Looking for new Versions")
            for (let index = 0; index < randint(4, 10); index++) {
                console.log(".")
                pause(500)
            }
            console.log("No Newer Versions Found.")
            console.log("Reinstalling the Juno ")
            console.log("Kernel...")
            pause(1000)
            blockSettings.clear()
            game.reset()
        }
    }
    console.log(" ")
    console.log("Juno > ____")
}
function Version () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("This version is up ")
    console.log("to date.")
    console.log(" ")
    console.log("Juno > ____")
}
function Directory () {
    console.log(" ")
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Command_List = [blockSettings.readString("Directory")]
    console.log(blockSettings.list())
    console.log(" ")
    console.log("Juno > ____")
}
function Error_Screen () {
    spriteutils.setConsoleOverlay(false)
    pause(500)
    scene.setBackgroundColor(2)
    pause(100)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel")
    console.log(" ")
    console.log("FATAL ERROR")
    console.log("002 - Key File Deleted")
    console.log(" ")
    console.log("What can I do to fix this?")
    console.log("- Restart the Simulator. ")
    console.log("- Juno will need to reinstall the Bootloader.")
    console.log("- All Settings will be removed.")
    blockSettings.clear()
    while (true) {
        pause(100)
    }
}
function Files () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("Files:")
    pause(100)
    Setting__Command_List()
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_View () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    if (blockSettings.exists(Temporary_File_Name)) {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + Temporary_File_Name + "\"")
        console.log(blockSettings.readString(Temporary_File_Name))
        console.log(" ")
        console.log("Juno > ____")
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("Error 001 - No Settings")
        console.log("found with name \"" + Temporary_File_Name + "\"")
        console.log("Create new setting with name \"" + Temporary_File_Name + "\"?")
        pause(2000)
        spriteutils.setConsoleOverlay(false)
        RegistryView001BooleanCreate = game.askForString("Create setting with name \"" + Temporary_File_Name + "\"?")
        if (RegistryView001BooleanCreate == "Yes" || RegistryView001BooleanCreate == "yes") {
            Temporary_File_Data = game.askForString("Insert File Data")
            blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
            spriteutils.setConsoleOverlay(true)
            console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
            console.log(" ")
            console.log("\"" + Temporary_File_Name + "\"" + " " + "has Been Created.")
        } else if (RegistryView001BooleanCreate == "No" || RegistryView001BooleanCreate == "no") {
            game.reset()
        } else {
            game.reset()
        }
    }
}
function Registry_Edit () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    spriteutils.setConsoleOverlay(false)
    Temporary_File_Name = game.askForString("Insert File Name")
    if (blockSettings.exists(Temporary_File_Name)) {
        OldTempFileData = blockSettings.readString(Temporary_File_Name)
        Temporary_File_Data = game.askForString("Insert NEW File Data")
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("\"" + Temporary_File_Name + "\"")
        console.log("" + OldTempFileData + " ---> " + Temporary_File_Data)
        blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
    } else {
        spriteutils.setConsoleOverlay(true)
        console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
        console.log(" ")
        console.log("File with name \"" + Temporary_File_Name + "\"")
        console.log("Not Found.")
        console.log(" ")
        console.log("Juno > ____")
    }
}
function VersionLog () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    console.log(" ")
    console.log("Kernel Update")
    console.log(" ")
    console.log("- Added Bootloader Setting")
    console.log("- Added Files")
    console.log(" ")
    console.log("Juno > ____")
}
function Registry_Delete () {
    blockSettings.writeString("MostRecentFile", blockSettings.readString("DirectorySearch"))
    Temporary_File_Name = game.askForString("Insert File Name")
    blockSettings.remove(Temporary_File_Name)
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
    console.log(" ")
    console.log("Note: Settings that are bundled with Juno Kernel are unable to be deleted.")
    console.log(" ")
    console.log("You Can Delete:")
    console.log("Bootloader [NOT RECOMMENDED]")
    console.log("Custom Settings")
    console.log(" ")
    pause(500)
    if (Temporary_File_Name == "Bootloader") {
        Error_Screen()
    } else {
        console.log("Juno > ____")
    }
}
let OldTempFileData = ""
let RegistryView001BooleanCreate = ""
let SystemReinstallVerificationBoolean = false
let Temporary_File_Name = ""
let Temporary_File_Data = ""
let OldTempFileName = ""
let Command_List: string[] = []
if (blockSettings.exists("Bootloader")) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff4444444fffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff444fffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444ffffffffff444ffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444fffffffff44444fffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444ffffffff444444fffffffffff444fff44fffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff4444fffffff44444fffffffffffff4444ff444ffffffff4444444444ffffff44444444fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff4444fffffff4444fffffffffffff4444fff444ffffff444444444444ffffff44444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff444ffffffff4444fffffffffffff444ffff444fffff444444fff4444ffff444444f44444444ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff444fffffff444ffffffffffffff4444fff4444ff4444444fffff444ffff4444fff4444444444fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff444fffffff444fffffffffffff4444fff4444fff44444fffffff444fff4444fffff444ff44444ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444fffffff444fffffffffffff4444fff444ff44444ffffffff4444fff4444fffffffffff4444ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff444ffffffff444ffffffffffff4444ffff444ff44444ffffffff4444fff444ffffffffffff4444ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444fffffffff444fffffffffff4444fffff44444444fffffffff4444ffff444ffffffffffff444fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444fffffffff444ffffffffff44444fffff4444444ffffffffff4444ffff44ffffffffffff444ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444fffffffff444fffffffff44444ffffff44444ffffffffffff444fffff44ffffffffffff444ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff444ffffffffff444fffffff44444fffffff4444ffffffffffffff444fffff444ffffffff4444ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff444ffffffffff44444fff4444444fffffff4444ffffffffffffff444fffff4444ffffff44444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff4444fffffffffff444444444444fffffffff444fffffffffffffff444fffff4444fffff44444fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff4444fffffffffff444444444444fffffffff444fffffffffffffff444fffff4444444444444ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff444ffffffffffffffff444444ffffffffffff44ffffffffffffffff444fffffff44444444fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff44ffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff444fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff444fffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff4444ffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444ffffff44fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff44444ffff4ffffff4ffffffffffffffffffffffffffffffffffffffffffffffff444444ff44444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4fffff44ffffffffffffffffffffffffff4fffffffffffffffffffffffff444f44444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff444ffff44fffffffffffffffffffffffff44fffff44fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff44444fff44fffffffffffffffffffffff4444fffff44fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fffff4fff44444ff44fffffff4fff4fffffffffffff4ffff44fffffff4444ffffff44ff44444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff44fff44fff44f4444444ff444ffff4ff444444ff4f44444ffffffff444ffffff44f444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff44ff4fff444ff444ff44fff444ff44ff4ffff4f4444ff44ffffffffff44fffff44fffff44ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff4ff4444444fff44fff44ffff44ff44f44ffff4f444fff44ffffffffff44fffff44fff4444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4ff4fff44444ffff44fffffffffff44f44f4ffff444444fff44ffffff44444ff4444444f44ff44fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4f44fff44fffffff4ffffffffff44fff44ff4444ff44fffff44ffffff4444fff4444444f444444fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444fffff44ffffff4ffffffff4444fff44ff444ffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff44fffffff44fffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 83, 255, 0, 1247, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    Juno()
} else {
    spriteutils.setConsoleOverlay(true)
    console.log("Juno Kernel Installation")
    pause(100)
    console.log("Installing Necessary Settings...")
    console.log(" ")
    console.log("NOTE: Some Settings Might be installed that aren't listed below. Once setup finishes please use the  'Files' Command to view  all settings.")
    pause(500)
    console.log(" ")
    blockSettings.writeString("Registry", "ver0.27.0")
    console.log("Registry {Installed}")
    pause(500)
    blockSettings.writeString("Files", "Settings + Commands")
    console.log("Files {Installed}")
    pause(500)
    blockSettings.writeString("Directory", "Directory")
    console.log("Directory {Installed}")
    pause(500)
    blockSettings.writeNumber("Version", 32)
    console.log("Version {Installed}")
    pause(500)
    console.log(" ")
    console.log("Installing Bootloader...")
    blockSettings.writeNumber("Bootloader", 27)
    console.log("Bootloader has installed!")
    console.log("The Kernel will now")
    console.log("restart...")
    pause(500)
    game.reset()
}
