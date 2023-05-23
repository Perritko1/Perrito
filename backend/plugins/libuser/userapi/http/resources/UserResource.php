<?php
    namespace LibUser\Userapi\Http\Resources;
    use Illuminate\Http\Resources\Json\JsonResource;
    use RainLab\User\Models\User;

    class UserResource extends JsonResource {

        public function toArray($request) {
            return [
                "id" => $this->id,
                "name" => $this->name,
                "surname" => $this->surname,
                "email" => $this->email,
                "dog_preference" => $this->dog_preference,
                "race" => $this->race,
                "number" => $this->number,
                "birthday" => $this->birthday,
                "dog_trained" => $this->dog_trained,
                "location" => $this->location,
                "popis" => $this->popis,
                "weight" => $this->weight,
                "pricehour" => $this->pricehour,
                "priceday" => $this->priceday,
                "is_activated" => $this->is_activated,
                "registered_at" => date($this->created_at),
<<<<<<< Updated upstream
                "avatar" => $this->avatar,
=======
                "avatar" => optional($this->avatar)->path,
>>>>>>> Stashed changes
            ];
        }
        
    }