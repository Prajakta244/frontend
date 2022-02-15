**iDealFunds-V5.5-243.20220203.2 - ENH**

Release Date 03-Feb-2022
Released By Prajakta, Sagar
Reviewed By PG Acharya

**Features added**

1. Sequencing of Column
2. Sorting of Column (ascending/descending)
3. Setting Density (Default/Compact) of Table rows
4. Upload Action Added
5. Generic upload for collection
6. Download excel option added
7. Uploading Macro Component
8. Import/Export
9. Minor bug fixes



**Special Instructions:-**
1. Create an empty folder named `upload` in /credence/microservices/
2. Add following configuration in /funds_sc/fundsnservices/dbconfig.json

```
"UPLOAD_PATH":"", -- Add an absolute path to the above created upload folder.
"NGINX_IP":"http://localhost",
```

3. Add following configuration in app-builder\dist\config.js. Then add this notification room in
ncenter i.e notification center.

```
config.NCollection = 'APP_BUILDER'; // NOTIFICATIONS ROOM
```
4. Download `Interface.zip`, `benpos_method1.flows.json`, `benpos_method2.flows.json`.
5. Import `Interface.zip` in app-builder  by firing following command in cmd.
    - credcli appbuilder:import
    - Then enter path for `Interface.zip`
6. Now open jobcenternodered in browser and import both of this workflows, `benpos_method1.flows.json`, `benpos_method2.flows.json`.

**Credcli changes**
1. If you have installed credcli using the `npm install` method then fire the following command in cmd/bash.
```npm i -g @credenceanalytics/credcli@latest```
2. Otherwise if you have installed it using an offline method then apply the given patch(it contains the credcli patch).
3. If you have already added credcli service in credcli config then skip to the fifth step and apply patch as usual.
4. To apply this patch using credcli we will need to add credcli service path in credcli patch configuration.
Just follow the steps below to configure credcli service.

- Visit `https://credence-docs.gitlab.io/credcli/standard` this link and We need to perform the same steps as shown in the `Add or update service` section.
- Add `credcli` as a service name When it'll ask to enter the service name.
- Then add `path-to-the-credcli-folder` as a path when it'll ask to enter the service path.
   for eg. `c:\credence\credcli`
- After that credcli service will get configured into credcli patch configuration then apply the patch like we do for other microservices (make sure to add the attached patch file in `patchFolder`) via CRED CLI (Patch Version Control tool).
- Before applying the patch via CRED CLI tool please take the backup of the entire source code.

5. After the changes are applied, run the below command to migrate an already created app to the new app structure.
```
credcli appbuilder:migratev3
```

Earlier patches are released in the following order
- iDealFunds-V5.5-243.20211001.1 - ENH
