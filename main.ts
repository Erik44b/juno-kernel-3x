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
    if (blockSettings.readString("Terminal") == "t") {
        if (InBoot) {
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
        }
    }
})
function GoBoot () {
    BootText.setText("Bootloader (1/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeNumber("Version", 30)
    BootText.setText("Version (2/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("VersionLog", "Version 0031a")
    SystemReinstallVerificationBoolean = false
    BootText.setText("VersionLog (3/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Directory", "Directory")
    BootText.setText("Directory (4/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Directory.Search", "DirectorySearch")
    BootText.setText("DirectorySearch (5/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Files", "Settings + Commands")
    BootText.setText("Files (6/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Clear", "ver0.27.0")
    BootText.setText("Clear (7/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Registry", "ver0.27.0")
    BootText.setText("Registry (8/9)")
    BootText.setPosition(80, 90)
    pause(100)
    blockSettings.writeString("Help", "ver0.27.0")
    BootText.setText("Help (9/9)")
    BootText.setPosition(80, 90)
    pause(100)
    BootText.setText("Booting Juno...")
    BootText.setPosition(80, 90)
    Command_List = [
    "Directory",
    "Version",
    "VersionLog",
    "Files",
    "Registry",
    "Help"
    ]
}
function RLA () {
    Registry2 = true
    blockMenu.showMenu(
    [
    Temporary_File_Name,
    Temporary_File_Data,
    "Create",
    "Return"
    ],
    1,
    MenuLocation.RightHalf,
    [
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 f 4 f 4 f 
        f 4 4 4 4 4 4 f 4 4 f 
        f 4 1 1 1 f 4 f 4 4 f 
        f 4 1 1 1 f 4 f 4 4 f 
        f 4 1 1 1 f 4 f 4 4 f 
        f 4 4 4 4 4 4 f 4 4 f 
        f 4 4 4 4 4 f 4 f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 2 2 4 4 4 4 4 4 f 
        f 4 2 2 5 4 4 4 4 4 f 
        f 4 4 5 5 5 4 4 4 4 f 
        f 4 4 4 5 5 5 4 4 4 f 
        f 4 4 4 4 5 5 d 4 4 f 
        f 4 4 4 4 4 d f 4 4 f 
        f 4 4 4 4 4 4 4 f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 f f 4 4 4 4 f 
        f 4 4 f f f 4 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 f f f 4 4 4 4 f 
        f 4 4 4 f f 4 4 4 4 f 
        f 4 4 4 4 f 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `
    ]
    )
}
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
function BIOS () {
    console.log("                Juno BIOS")
    console.log("                =========")
    blockMenu.setControlsEnabled(true)
    blockMenu.showMenu(
    [
    "Debug Tool",
    "Boot Juno",
    "Check for Updates"
    ],
    1,
    MenuLocation.LeftHalf,
    [img`
        f f f f f . f f f f f . . 
        f 4 4 4 f . f 4 4 4 f . . 
        f 4 4 4 f f f 4 4 4 f . . 
        f 4 4 4 4 4 4 4 4 4 f . . 
        f f f 4 4 4 4 4 4 4 f f f 
        . . f 4 4 4 4 4 4 4 4 4 f 
        f f f 4 4 4 4 4 4 4 f f f 
        f 4 4 4 4 4 4 4 4 4 f . . 
        f 4 4 4 f f f 4 4 4 f . . 
        f 4 4 4 f . f 4 4 4 f . . 
        f f f f f . f f f f f . . 
        `, img`
        f f f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 f 4 4 4 4 4 4 4 4 f 
        f 4 4 4 f 4 4 4 4 4 4 4 f 
        f 4 4 f 4 4 4 4 4 4 4 4 f 
        f 4 f 4 4 4 f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f f f 
        `, img`
        f f f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f f f 
        `]
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readString("Terminal") == "t") {
        if (InBoot) {
            spriteutils.setConsoleOverlay(false)
            blockSettings.writeString("DirectorySearch", game.askForString("Insert Command"))
            if (blockSettings.exists(blockSettings.readString("DirectorySearch"))) {
                spriteutils.setConsoleOverlay(true)
                console.log("Juno Kernel Version " + blockSettings.readNumber("Version"))
                console.log(" ")
                console.log("\"" + blockSettings.readString("DirectorySearch") + "\"")
                console.log(" ")
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
                } else if (blockSettings.readString("DirectorySearch") == "Library") {
                    blockSettings.writeString("Terminal", "f")
                    game.reset()
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
        }
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
    BootText = textsprite.create("Loading System Files...", 0, 4)
    BootText.setPosition(80, 90)
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
        fffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff4444444fffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
        fffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff44444ffff4ffffff4ffffffffffffffffffffffffffffffffffffffffffffffff44444ffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4fffff44ffffffffffffffffffffffffff4fffffffffffffffffffff444444ff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff444ffff44fffffffffffffffffffffffff444f44ff44ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff44444fff44fffffffffffffffffffffffff44ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fffff4fff44444ff44fffffff4fff4fffffffffffff4ffff44ffffffff4444ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff44fff44fff44f4444444ff444ffff4ff444444ff4f44444fffffff4444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff44ff4fff444ff444ff44fff444ff44ff4ffff4f4444ff44ffffffff444fff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4fff4ff4444444fff44fff44ffff44ff44f44ffff4f444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4ff4fff44444ffff44fffffffffff44f44f4ffff444444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4f44fff44fffffff4ffffffffff44fff44ff4444ff44fffff44ffffff44444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444fffff44ffffff4ffffffff4444fff44ff444ffffffffff44ffffff4444fffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
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
    Commands = false
    Settings = false
    System = false
    Registry3 = false
    Registry2 = false
    BootJuno()
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
function BootJuno () {
    InBoot = true
    pause(1000)
    if (InBoot) {
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
            fffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff4444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff4444444fffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
            fffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff44444ffff4ffffff4ffffffffffffffffffffffffffffffffffffffffffffffff44444ffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff4fffff44ffffffffffffffffffffffffff4fffffffffffffffffffff444444ff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff444ffff44fffffffffffffffffffffffff444f44ff44ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff44444fff44fffffffffffffffffffffffff44ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4fffff4fff44444ff44fffffff4fff4fffffffffffff4ffff44ffffffff4444ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4fff44fff44fff44f4444444ff444ffff4ff444444ff4f44444fffffff4444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4fff44ff4fff444ff444ff44fff444ff44ff4ffff4f4444ff44ffffffff444fff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4fff4ff4444444fff44fff44ffff44ff44f44ffff4f444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4ff4fff44444ffff44fffffffffff44f44f4ffff444444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff4f44fff44fffffff4ffffffffff44fff44ff4444ff44fffff44ffffff44444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff444fffff44ffffff4ffffffff4444fff44ff444ffffffffff44ffffff4444fffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
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
        GoBoot()
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
        BootText.setText(" ")
        if (blockSettings.readString("Terminal") == "f") {
            Juno_Library()
        } else {
            Juno_Terminal()
        }
    } else {
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
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fffff4fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff444ffffff44ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff444ffffff44f4fffffff444ffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444fff444fffffff44ff4ffff4444444fff444444ffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffff44fffffff444f44ff4444ff44ff44ff444444ffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffff44fffffff44ff44ff44ffff44ff44fff4f444ffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffff44ffffff44fff4f444fffff44ff4fffffff44ffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff44fffff444fff4444fffff44fff4ffffff44fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff44fffff44ffff44fffffff44fff4ffffff44fffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffff444f4444ffff44ffffffff44fff44fff444ffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffff4444444fffff44ffffffff44fff4444444fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffff444fffffff4fffffffff44ffff4444fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffff4fffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fff44444444444444444444444444444444444444444444444444444ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ff444444444444444444444444444444444444444444444444444444ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffff4fffffffffffff4444fff44ffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff4ffffffffff444ff4fffffffffffff4444ff4444fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f4ff4ff44444f44ff4f444f4f44ffffffff4fffff4fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f4f4ff4f44f4ff44f4f4fff44f4fffffff44fffff4fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fff444ff4ffffff4f44ff4444f4ffffff44fff4444fffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ff44ffffffff44ff4f44fffff4fffffff44ff4ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffff4fffffff44fffffffffffffffffffff4ff4ffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444ff4444fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ffff44ffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        BootText.setText(" ")
        spriteutils.setConsoleOverlay(true)
        BIOS()
    }
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
    console.log("--Use the Library Command to switch to the Library GUI--")
    console.log(" ")
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (InBoot) {
        InBoot = false
    }
})
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
    pause(100)
    Setting__Command_List()
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
function Juno_Library () {
    spriteutils.setConsoleOverlay(true)
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
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff4444fffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff44fffff444ffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff44fffff444ffffff44f4fffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff444fff444fffffff44ff4ffff4444444fff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff44ffff44fffffff444f44ff4444ff44ff44ff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff44ffff44fffffff44ff44ff44ffff44ff44fff4f444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff4fffff44ffffff44fff4f444fffff44ff4fffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff44fffff44fffff444fff4444fffff44fff4ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff44fffff44fffff44ffff44fffffff44fff4ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff4ffffff444f4444ffff44ffffffff44fff44fff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff44ffffff4444444fffff44ffffffff44fff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff4fffffffff444fffffff4fffffffff44ffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff44ffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff44fff44444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff44ff444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff44ffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff4ffffffffffffff4fffffffffffff4444fff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff4ff4ffffffffff444ff4fffffffffffff4444ff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff4f4ff4ff44444f44ff4f444f4f44ffffffff4fffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff4f4f4ff4f44f4ff44f4f4fff44f4fffffff44fffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff4fff444ff4ffffff4f44ff4444f4ffffff44fff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff44ff44ffffffff44ff4f44fffff4fffffff44ff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff4ffff4fffffff44fffffffffffffffffffff4ff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff4444ff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff444ffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Commands = false
    Registry3 = false
    Registry2 = false
    blockMenu.showMenu(
    [
    "Programs",
    "Commands",
    "Settings",
    "System",
    "Power"
    ],
    1,
    MenuLocation.RightHalf,
    [
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 f f f 4 4 4 f 
        f 4 f f f f f 4 4 4 f 
        f 4 4 4 4 f f 4 4 4 f 
        f 4 4 4 4 f f 4 4 4 f 
        f 4 4 4 4 f f 4 4 4 f 
        f 4 4 4 4 f f 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f 4 4 4 4 4 4 4 f 
        f 4 4 f 4 4 4 4 4 4 f 
        f 4 4 4 f 4 4 4 4 4 f 
        f 4 4 f 4 4 4 4 4 4 f 
        f 4 f 4 4 4 f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f f f 5 4 4 4 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `,
    img`
        f f f f f . f f f f f 
        f 4 4 4 f . f 4 4 4 f 
        f 4 f 4 f f f 4 f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f 4 f f f 4 f f f 
        . . f 4 f . f 4 f . . 
        f f f 4 f f f 4 f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f 4 f f f 4 f 4 f 
        f 4 4 4 f . f 4 4 4 f 
        f f f f f . f f f f f 
        `,
    img`
        f f f f f f f f f f f 
        f 4 4 4 4 4 4 4 4 4 f 
        f 4 f f 4 f 4 f f 4 f 
        f 4 f 4 4 f 4 4 f 4 f 
        f 4 f 4 4 f 4 4 f 4 f 
        f 4 f 4 4 f 4 4 f 4 f 
        f 4 f 4 4 4 4 4 f 4 f 
        f 4 f 4 4 4 4 4 f 4 f 
        f 4 f f f f f f f 4 f 
        f 4 4 4 4 4 4 4 4 4 f 
        f f f f f f f f f f f 
        `
    ]
    )
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
blockMenu.onMenuOptionSelected(function (option, index) {
    if (InBoot) {
        if (System) {
            if (option == "Terminal Toggle") {
                blockSettings.writeString("Terminal", "t")
                game.reset()
            } else if (option == "System Reset") {
                blockSettings.clear()
                game.reset()
            }
        } else {
            if (Commands) {
                if (Registry3) {
                    if (Registry2) {
                        if (option == Temporary_File_Name) {
                            Temporary_File_Name = game.askForString("Insert Name")
                            RLA()
                        } else if (option == Temporary_File_Data) {
                            Temporary_File_Data = game.askForString("Insert Data")
                            RLA()
                        } else if (option == "Create") {
                            blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
                            spriteutils.setConsoleOverlay(false)
                            spriteutils.setConsoleOverlay(true)
                            Juno_Library()
                        } else if (option == "Return") {
                            Registry2 = false
                            Registry3 = true
                            blockMenu.showMenu(
                            [
                            "Add",
                            "Edit",
                            "Rename",
                            "Delete",
                            "Return"
                            ],
                            1,
                            MenuLocation.RightHalf,
                            [
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 4 f 4 f 4 f 
                                f 4 4 4 4 4 4 f 4 4 f 
                                f 4 1 1 1 f 4 f 4 4 f 
                                f 4 1 1 1 f 4 f 4 4 f 
                                f 4 1 1 1 f 4 f 4 4 f 
                                f 4 4 4 4 4 4 f 4 4 f 
                                f 4 4 4 4 4 f 4 f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 2 2 4 4 4 4 4 4 f 
                                f 4 2 2 5 4 4 4 4 4 f 
                                f 4 4 5 5 5 4 4 4 4 f 
                                f 4 4 4 5 5 5 4 4 4 f 
                                f 4 4 4 4 5 5 d 4 4 f 
                                f 4 4 4 4 4 d f 4 4 f 
                                f 4 4 4 4 4 4 4 f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 f d 4 4 4 4 4 f 
                                f 4 4 d 5 5 4 4 4 4 f 
                                f 4 4 4 5 5 5 4 4 4 f 
                                f 4 4 4 4 5 5 5 4 4 f 
                                f 4 4 4 4 4 5 2 2 4 f 
                                f 4 4 4 4 4 4 2 2 e f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 f f 4 4 4 4 f 
                                f 4 4 f f f 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 f f f 4 4 4 4 f 
                                f 4 4 4 f f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `
                            ]
                            )
                        }
                    } else {
                        if (option == "Add") {
                            Temporary_File_Name = "[Insert Name]"
                            Temporary_File_Data = "[Insert Data]"
                            RLA()
                        } else if (option == "Edit") {
                            Temporary_File_Name = game.askForString("Insert Name")
                            Temporary_File_Data = game.askForString("Insert New Data")
                            blockSettings.writeString(Temporary_File_Name, Temporary_File_Data)
                            Juno_Library()
                        } else if (option == "Rename") {
                            OldTempFileName = game.askForString("Insert Old Name")
                            Temporary_File_Name = game.askForString("Insert New Name")
                            blockSettings.writeString(Temporary_File_Name, blockSettings.readString(OldTempFileName))
                            blockSettings.remove(OldTempFileName)
                            if (OldTempFileName == "Bootloader") {
                                blockMenu.closeMenu()
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
                                spriteutils.setConsoleOverlay(false)
                                spriteutils.setConsoleOverlay(true)
                                Error_Screen2()
                            } else {
                                Juno_Library()
                            }
                        } else if (option == "Delete") {
                            Temporary_File_Name = game.askForString("Insert Name")
                            if (blockSettings.exists(Temporary_File_Name)) {
                                blockSettings.remove(Temporary_File_Name)
                                if (OldTempFileName == "Bootloader") {
                                    blockMenu.closeMenu()
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
                                    spriteutils.setConsoleOverlay(false)
                                    spriteutils.setConsoleOverlay(true)
                                    Error_Screen()
                                } else {
                                    Juno_Library()
                                }
                            } else {
                                Juno_Library()
                            }
                        } else if (option == "Return") {
                            Registry2 = false
                            Registry3 = false
                            Commands = true
                            blockMenu.showMenu(
                            [
                            "Directory",
                            "Registry",
                            "Version",
                            "Files",
                            "Bootloader",
                            "Return"
                            ],
                            1,
                            MenuLocation.RightHalf,
                            [
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f 4 4 f 4 4 f 4 f 
                                f 4 f 4 f 4 f 4 f 4 f 
                                f 4 4 f f 4 f f 4 4 f 
                                f 4 4 f 4 4 4 f 4 4 f 
                                f 4 4 f f 4 f f 4 4 f 
                                f 4 f 4 f 4 f 4 f 4 f 
                                f 4 f 4 4 f 4 4 f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 f f f 4 4 4 f 
                                f 4 4 f 4 4 4 f 4 4 f 
                                f 4 f 4 4 4 4 4 f 4 f 
                                f 4 f 4 f 4 f 4 f 4 f 
                                f 4 f 4 4 4 4 4 f 4 f 
                                f 4 4 f 4 4 4 f 4 4 f 
                                f 4 4 4 f f f 4 4 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 4 f f f 4 f 
                                f 4 4 4 4 f 7 7 f 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 f 5 5 5 5 5 f 4 f 
                                f 4 f 5 5 5 5 5 f 4 f 
                                f 4 f 5 5 5 5 5 f 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 f d d d f 5 f 4 f 
                                f 4 f f f d f 5 f 4 f 
                                f 4 f d f d f 5 f 4 f 
                                f 4 f f f d f 5 f 4 f 
                                f 4 f d d d f 5 f 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `,
                            img`
                                f f f f f f f f f f f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 f f 4 4 4 4 f 
                                f 4 4 f f f 4 4 4 4 f 
                                f 4 f f f f f f f 4 f 
                                f 4 4 f f f 4 4 4 4 f 
                                f 4 4 4 f f 4 4 4 4 f 
                                f 4 4 4 4 f 4 4 4 4 f 
                                f 4 4 4 4 4 4 4 4 4 f 
                                f f f f f f f f f f f 
                                `
                            ]
                            )
                        }
                    }
                } else {
                    if (option == "Directory") {
                        blockMenu.closeMenu()
                        Directory()
                        pause(5000)
                        spriteutils.setConsoleOverlay(false)
                        spriteutils.setConsoleOverlay(true)
                        Juno_Library()
                    } else if (option == "Registry") {
                        Registry3 = true
                        blockMenu.showMenu(
                        [
                        "Add",
                        "Edit",
                        "Rename",
                        "Delete",
                        "Return"
                        ],
                        1,
                        MenuLocation.RightHalf,
                        [
                        img`
                            f f f f f f f f f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 f f f f f f f 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f f f f f f f f f f f 
                            `,
                        img`
                            f f f f f f f f f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 4 4 4 4 f 4 f 4 f 
                            f 4 4 4 4 4 4 f 4 4 f 
                            f 4 1 1 1 f 4 f 4 4 f 
                            f 4 1 1 1 f 4 f 4 4 f 
                            f 4 1 1 1 f 4 f 4 4 f 
                            f 4 4 4 4 4 4 f 4 4 f 
                            f 4 4 4 4 4 f 4 f 4 f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f f f f f f f f f f f 
                            `,
                        img`
                            f f f f f f f f f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 2 2 4 4 4 4 4 4 f 
                            f 4 2 2 5 4 4 4 4 4 f 
                            f 4 4 5 5 5 4 4 4 4 f 
                            f 4 4 4 5 5 5 4 4 4 f 
                            f 4 4 4 4 5 5 d 4 4 f 
                            f 4 4 4 4 4 d f 4 4 f 
                            f 4 4 4 4 4 4 4 f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f f f f f f f f f f f 
                            `,
                        img`
                            f f f f f f f f f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 4 f d 4 4 4 4 4 f 
                            f 4 4 d 5 5 4 4 4 4 f 
                            f 4 4 4 5 5 5 4 4 4 f 
                            f 4 4 4 4 5 5 5 4 4 f 
                            f 4 4 4 4 4 5 2 2 4 f 
                            f 4 4 4 4 4 4 2 2 e f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f f f f f f f f f f f 
                            `,
                        img`
                            f f f f f f f f f f f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 f f 4 4 4 4 f 
                            f 4 4 f f f 4 4 4 4 f 
                            f 4 f f f f f f f 4 f 
                            f 4 4 f f f 4 4 4 4 f 
                            f 4 4 4 f f 4 4 4 4 f 
                            f 4 4 4 4 f 4 4 4 4 f 
                            f 4 4 4 4 4 4 4 4 4 f 
                            f f f f f f f f f f f 
                            `
                        ]
                        )
                    } else if (option == "Version") {
                        blockMenu.closeMenu()
                        console.log("Juno 32")
                        console.log("This Version is up to    date")
                        pause(5000)
                        spriteutils.setConsoleOverlay(false)
                        spriteutils.setConsoleOverlay(true)
                        Juno_Library()
                    } else if (option == "Files") {
                        blockMenu.closeMenu()
                        Files()
                        pause(5000)
                        spriteutils.setConsoleOverlay(false)
                        spriteutils.setConsoleOverlay(true)
                        Juno_Library()
                    } else if (option == "Bootloader") {
                        blockMenu.closeMenu()
                        console.log("Juno Bootloader")
                        console.log("version 27")
                        pause(5000)
                        spriteutils.setConsoleOverlay(false)
                        spriteutils.setConsoleOverlay(true)
                        Juno_Library()
                    } else if (option == "Return") {
                        Registry2 = false
                        Registry3 = false
                        Commands = false
                        Juno_Library()
                    }
                }
            } else {
                if (option == "Programs") {
                    blockMenu.closeMenu()
                    console.log("!! Feature currently in  Development !!")
                    pause(1000)
                    spriteutils.setConsoleOverlay(false)
                    spriteutils.setConsoleOverlay(true)
                    Juno_Library()
                } else if (option == "Commands") {
                    Commands = true
                    blockMenu.showMenu(
                    [
                    "Directory",
                    "Registry",
                    "Version",
                    "Files",
                    "Bootloader",
                    "Return"
                    ],
                    1,
                    MenuLocation.RightHalf,
                    [
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `,
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f 4 4 f 4 4 f 4 f 
                        f 4 f 4 f 4 f 4 f 4 f 
                        f 4 4 f f 4 f f 4 4 f 
                        f 4 4 f 4 4 4 f 4 4 f 
                        f 4 4 f f 4 f f 4 4 f 
                        f 4 f 4 f 4 f 4 f 4 f 
                        f 4 f 4 4 f 4 4 f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `,
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 f f f 4 4 4 f 
                        f 4 4 f 4 4 4 f 4 4 f 
                        f 4 f 4 4 4 4 4 f 4 f 
                        f 4 f 4 f 4 f 4 f 4 f 
                        f 4 f 4 4 4 4 4 f 4 f 
                        f 4 4 f 4 4 4 f 4 4 f 
                        f 4 4 4 f f f 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `,
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 f f f 4 f 
                        f 4 4 4 4 f 7 7 f 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 f 5 5 5 5 5 f 4 f 
                        f 4 f 5 5 5 5 5 f 4 f 
                        f 4 f 5 5 5 5 5 f 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `,
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 f d d d f 5 f 4 f 
                        f 4 f f f d f 5 f 4 f 
                        f 4 f d f d f 5 f 4 f 
                        f 4 f f f d f 5 f 4 f 
                        f 4 f d d d f 5 f 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `,
                    img`
                        f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 f 4 4 4 4 f 
                        f 4 4 4 f f 4 4 4 4 f 
                        f 4 4 f f f 4 4 4 4 f 
                        f 4 f f f f f f f 4 f 
                        f 4 4 f f f 4 4 4 4 f 
                        f 4 4 4 f f 4 4 4 4 f 
                        f 4 4 4 4 f 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f 
                        `
                    ]
                    )
                } else if (option == "Settings") {
                    blockMenu.closeMenu()
                    Registry_View()
                    pause(1000)
                    spriteutils.setConsoleOverlay(false)
                    spriteutils.setConsoleOverlay(true)
                    Juno_Library()
                } else if (option == "System") {
                    System = true
                    blockMenu.showMenu(
                    ["Terminal Toggle", "System Reset"],
                    1,
                    MenuLocation.RightHalf,
                    [img`
                        f f f f f f f f f f f f f 
                        f 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 f 
                        f 4 f 4 4 4 4 4 4 4 4 4 f 
                        f 4 4 f 4 4 4 4 4 4 4 4 f 
                        f 4 4 4 f 4 4 4 4 4 4 4 f 
                        f 4 4 f 4 4 4 4 4 4 4 4 f 
                        f 4 f 4 4 4 f f f f f 4 f 
                        f 4 4 4 4 4 4 4 4 4 4 4 f 
                        f f f f f f f f f f f f f 
                        `, img`
                        f f f f f f f . . . . 
                        f 4 4 4 4 4 . 4 4 . . 
                        f 4 4 4 4 4 . 4 . 4 . 
                        f 4 4 4 4 . 4 . . 4 . 
                        f 4 4 4 4 4 . 4 4 . . 
                        f 4 4 4 4 4 4 . 4 4 . 
                        f 4 4 4 4 4 . 4 . 4 . 
                        f 4 4 4 4 . 4 . 4 . . 
                        f 4 4 4 4 4 . 4 . 4 . 
                        f 4 4 4 4 4 . 4 4 . . 
                        f f f f f f f f . f . 
                        `]
                    )
                } else if (option == "Power") {
                    blockMenu.closeMenu()
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
                        fffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffff4444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff4444444fffffffff44fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
                        fffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffff44444ffff4ffffff4ffffffffffffffffffffffffffffffffffffffffffffffff44444ffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffff4fffff44ffffffffffffffffffffffffff4fffffffffffffffffffff444444ff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff444ffff44fffffffffffffffffffffffff444f44ff44ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4fffff4fffffffffffffffffff44444fff44fffffffffffffffffffffffff44ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4fffff4fff44444ff44fffffff4fff4fffffffffffff4ffff44ffffffff4444ffffff44ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4fff44fff44fff44f4444444ff444ffff4ff444444ff4f44444fffffff4444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4fff44ff4fff444ff444ff44fff444ff44ff4ffff4f4444ff44ffffffff444fff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4fff4ff4444444fff44fff44ffff44ff44f44ffff4f444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4ff4fff44444ffff44fffffffffff44f44f4ffff444444fff44ffffffffff44ff44ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff4f44fff44fffffff4ffffffffff44fff44ff4444ff44fffff44ffffff44444fff444444ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff444fffff44ffffff4ffffffff4444fff44ff444ffffffffff44ffffff4444fffff4444fffffffffffffffffffffffffffffffffffffffffffffffffff
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
                    textSprite = textsprite.create("Turning off the System...", 0, 4)
                    textSprite.setPosition(80, 100)
                    music.playSoundEffect(music.createSoundEffect(
                    WaveShape.Sawtooth,
                    141,
                    0,
                    255,
                    0,
                    1000,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                    ), SoundExpressionPlayMode.UntilDone)
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
                    textSprite.setText("")
                }
            }
        }
    } else {
        if (option == "Debug Tool") {
            blockMenu.closeMenu()
            console.log("!! Feature currently in  Development !!")
            pause(1000)
            spriteutils.setConsoleOverlay(false)
            spriteutils.setConsoleOverlay(true)
            BIOS()
        } else if (option == "Boot Juno") {
            blockMenu.closeMenu()
            spriteutils.setConsoleOverlay(false)
            BootJuno()
        } else if (option == "Check for Updates") {
            blockMenu.closeMenu()
            console.log("Version 32 [Most Recent  Version]")
            pause(1000)
            spriteutils.setConsoleOverlay(false)
            spriteutils.setConsoleOverlay(true)
            BIOS()
        }
    }
})
let textSprite: TextSprite = null
let OldTempFileData = ""
let RegistryView001BooleanCreate = ""
let Registry3 = false
let System = false
let Settings = false
let Commands = false
let OldTempFileName = ""
let Temporary_File_Data = ""
let Temporary_File_Name = ""
let Registry2 = false
let SystemReinstallVerificationBoolean = false
let BootText: TextSprite = null
let InBoot = false
let Command_List: string[] = []
blockSettings.writeNumber("Library", 30)
color.setColor(3, color.rgb(255, 170, 0))
color.setColor(4, color.rgb(255, 170, 0))
if (blockSettings.exists("Bootloader")) {
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
    blockSettings.writeString("Terminal", "f")
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
    blockSettings.writeNumber("Bootloader", 30)
    console.log("Bootloader has installed!")
    console.log("The Kernel will now")
    console.log("restart...")
    pause(500)
    game.reset()
}
