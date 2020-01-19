class User < ApplicationRecord
  has_many :lists
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end
