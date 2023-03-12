---
title: Command Line Interface
---

# Alis.Build CLI Installation

The Alis.Build command-line interface (CLI) is a powerful tool for managing resources on the Alis.Build platform.  You can use this tool to perform many common platform tasks either from the command line or in scripts and other automations. Some example use cases for the CLI:

**Build Lite**
- Define a new service;
- Auto-generate language-specific types; and
- Auto-generate server and client code.

**Build Enterprise**
- Define a new service;
- Build a service;
- Deploy a service;
- Auto-generate infrastructure and implementation code.

##  Installation

<tabs>
<tab name="macOS/Linux">

1. Run the following command to create an _alis.exchange_ folder in your home directory with a sub-folder _cli_.

```bash
mkdir -p ~/alis.exchange/cli
```

2. Add this folder to your `$PATH`:

```bash
// macOS
echo 'export PATH=$PATH:~/alis.exchange/cli' >> ~/.zshrc
// Linux
echo 'export PATH=$PATH:~/alis.exchange/cli' >> ~/.bashrc

```

3. Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).

| macOS Architecture | Download links  |
| ------ | -----|
| Darwin Arm64 (M1) | [download](https://files.cli.alis.services/darwin/arm64/latest/alis) |
| Darwin Amd64 | [download](https://files.cli.alis.services/darwin/amd64/latest/alis) |
  
| Linux Architecture | Download links  |
| ------ | -----|
|  Linux Arm | [download](https://files.cli.alis.services/linux/arm/latest/alis) |
| Linux Arm64 | [download](https://files.cli.alis.services/linux/arm64/latest/alis) |
| Linux Amd64 | [download](https://files.cli.alis.services/linux/amd64/latest/alis) |

::: tip
Not sure what your Architecture is? Run `uname -a` to find out.
:::
  
```bash
# macOS
curl https://files.cli.alis.services/darwin/arm/latest/alis --output $HOME/alis.exchange/cli/alis
curl https://files.cli.alis.services/darwin/arm64/latest/alis --output $HOME/alis.exchange/cli/alis
curl https://files.cli.alis.services/darwin/amd64/latest/alis --output $HOME/alis.exchange/cli/alis

# Linux
curl https://files.cli.alis.services/linux/arm/latest/alis --output $HOME/alis.exchange/cli/alis
curl https://files.cli.alis.services/linux/arm64/latest/alis --output $HOME/alis.exchange/cli/alis
curl https://files.cli.alis.services/linux/amd64/latest/alis --output $HOME/alis.exchange/cli/alis
```
  
4. Place the file in your _alis.exchange/cli_ folder. Run the following command to give it execute permission:

```bash
chmod a+x $HOME/alis.exchange/cli/alis
```

5. Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.

::: warning **Unidentified developer error?**
For macOS, open the CLI by right-clicking on the file and open. This will prompt you _The application is from an unidentified developer. Are you sure you want to open it?_.

Select open. This will allow macOS permission to always run the CLI, and therefore you only have to do it with your initial installation.
:::

You have successfully installed the **alis.exchange** CLI!
</tab>
<tab name="Windows">

1. Open your Windows Command Prompt (i.e. your terminal) as administrator.
  ::: tip
  Press the Windows Start button at the bottom left; type in "Command Prompt"; and right click on Command Prompt and click "Run as administrator".
  :::
2. Run the following command to create a folder in your home directory **alis.exchange** with a sub-folder _cli_.

```bash
mkdir %HOMEPATH%\alis.exchange\cli
```

::: warning
If your `HOMEPATH` contains a space, you might need to manually create both a `alis.exchange` directory, as well as a `cli` directory therein.
:::

3. Add this folder to your `$PATH`:

```bash
setx PATH "%PATH%;%HOMEPATH%\alis.exchange\cli" /m
```

4. Download the latest version of the CLI for your operating system (OS) and architecture (ARCH).

| Windows Architecture | Download links |
| ------- | -----|
| Windows Arm | [download](https://files.cli.alis.services/windows/arm/latest/alis.exe) |
| Windows Arm64 | [download](https://files.cli.alis.services/windows/arm64/latest/alis.exe) |
| Windows Amd64 | [download](https://files.cli.alis.services/windows/amd64/latest/alis.exe) |
  
::: tip
Not sure what your OS or ARCH is? Run `set PROCESSOR` to find out.
:::

5. Copy the downloaded `alis.exe` file to the `alis.exchange\cli` folder created in step 2.

6. Close and restart all currently open terminal windows, including IDEs, such that the configurations of the paths can take place.

</tab>
</tabs>

You have successfully installed the Alis CLI!

:::tip

If you are a Build Premium or Enterprise user, you will need to ensure the following:

1. **Ensure Git is installed**

Git may already be installed on your device. Check by running `git --version`. A successful response should look similar to `git version 2.30.0`.

If the command was not found, follow the [installation instructions](https://www.atlassian.com/git/tutorials/install-git).

2. **Connect the CLI with Google Cloud and Google Cloud Source Repositories**

From your terminal, run `alis login`. This will open your browser and require you to grant access to the Alis Exchange CLI to manage your Google Cloud.

Once you have granted access, you will be redirected to a similar login page for Google Cloud Source Repositories. Granting access allows for the CLI
to manage your repositories. Once you have logged in, follow the instructions in copying the relevant script into your terminal.
:::

### Alis Build Login

If you are registered as a Build Premium or Enterprise user, you can run the `alis login`
command to login and enable additional functionality for the CLI.

```bash
# Show help
alis -h

# Get the Google common protos
alis get google

# Get your organisation definitions
alis get {yourOrg}
```
