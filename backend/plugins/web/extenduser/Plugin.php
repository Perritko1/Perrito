<?php namespace Web\Extenduser;

use Backend;
use System\Classes\PluginBase;

/**
 * Plugin Information File
 *
 * @link https://docs.octobercms.com/3.x/extend/system/plugins.html
 */
class Plugin extends PluginBase
{
    /**
     * pluginDetails about this plugin.
     */
    public function pluginDetails()
    {
        return [
            'name' => 'extenduser',
            'description' => 'No description provided yet...',
            'author' => 'web',
            'icon' => 'icon-leaf'
        ];
    }

    /**
     * register method, called when the plugin is first registered.
     */
    public function register()
    {
        //
    }

    /**
     * boot method, called right before the request route.
     */
    public function boot()
    {
        \Event::listen('backend.form.extendFields', function (\Backend\Widgets\Form $widget) 
        {
            // Only for the User controller
            if (!$widget->getController() instanceof \RainLab\User\Controllers\Users) {
                return;
            }
        
            // Only for the User model
            if (!$widget->model instanceof \RainLab\User\Models\User) {
                return;
            }
        
            // Add an extra birthday field
            $widget->addFields([
                'dog_preference' => [
                    'label'   => 'Rola',
                    'type' => 'dropdown',
                    'options' => [
                        'owner' => 'Majitel',
                        'caretaker' => 'Strazca'
                    ]
                ],
            ]);
        });
    }

    /**
     * registerComponents used by the frontend.
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Web\Extenduser\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * registerPermissions used by the backend.
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'web.extenduser.some_permission' => [
                'tab' => 'extenduser',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * registerNavigation used by the backend.
     */
    public function registerNavigation()
    {

        return []; // Remove this line to activate

        return [
            'extenduser' => [
                'label' => 'extenduser',
                'url' => Backend::url('web/extenduser/mycontroller'),
                'icon' => 'icon-leaf',
                'permissions' => ['web.extenduser.*'],
                'order' => 500,
            ],
        ];
    }
}
