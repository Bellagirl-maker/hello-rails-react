class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Message.order('RANDOM()').first
    render json: @greeting, status: :ok
  end
end
