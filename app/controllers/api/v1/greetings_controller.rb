# frozen_string_literal: true

# rubocop:disable Style/Documentation
module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @random_greeting = Greeting.order('RANDOM()').first

        if @random_greeting
          render json: { greeting: @random_greeting.greeting }
        else
          render json: { greeting: 'No greetings found' }
        end
      end
    end
  end
end
# rubocop:enable Style/Documentation
