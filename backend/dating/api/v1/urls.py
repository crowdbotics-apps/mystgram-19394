from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    SettingViewSet,
    ProfileViewSet,
    InboxViewSet,
    DislikeViewSet,
    MatchViewSet,
    UserPhotoViewSet,
    LikeViewSet,
)

router = DefaultRouter()
router.register("userphoto", UserPhotoViewSet)
router.register("like", LikeViewSet)
router.register("inbox", InboxViewSet)
router.register("profile", ProfileViewSet)
router.register("match", MatchViewSet)
router.register("dislike", DislikeViewSet)
router.register("setting", SettingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
